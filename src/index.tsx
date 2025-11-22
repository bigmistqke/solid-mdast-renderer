import type { Root, RootContent, RootContentMap } from 'mdast'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { gfmTableFromMarkdown } from 'mdast-util-gfm-table'
import { gfmTable } from 'micromark-extension-gfm-table'
import {
  type Component,
  createContext,
  createEffect,
  createMemo,
  For,
  Show,
  useContext,
} from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { createDebug } from './utils'

const debug = createDebug('MDRenderer', false)

// Use parser with table and strikethrough support
const MdastRendererPropsContext = createContext<MDRendererProps>()
const NodeStackContext = createContext<Array<Root | RootContent>>([])
const TableCellContext = createContext<'head' | 'body'>()

function useNodeStack() {
  return useContext(NodeStackContext) as [Root | RootContent, ...Array<Root | RootContent>]
}

function useMDRendererProps() {
  const context = useContext(MdastRendererPropsContext)
  if (!context) {
    throw new Error('Use useMDRendererProps in a descendant of MDRenderer')
  }
  return context
}

interface MDRendererProps {
  content: string
  renderers?: Partial<typeof DefaultNodeRenderers>
}

export interface MDNode {
  type: string
  from: number
  to: number
  children: MDNode[]
  content: string
}

/**********************************************************************************/
/*                                                                                */
/*                                   Components                                   */
/*                                                                                */
/**********************************************************************************/

const NOOP = () => ''

export const Prefixes: Record<string, string> = {
  ListItem: '   ',
  Blockquote: '> ',
}

export const DefaultNodeRenderers: {
  [TKey in keyof RootContentMap]: Component<{ node: RootContentMap[TKey] }>
} = {
  // [link]: url "title" (link reference definition)
  linkReference: NOOP,
  definition: NOOP,
  delete: NOOP,
  footnoteDefinition: NOOP,
  footnoteReference: NOOP,
  imageReference: NOOP,
  yaml: NOOP,

  // > blockquote
  blockquote(props) {
    return (
      <blockquote>
        <DefaultChildren node={props.node} />
      </blockquote>
    )
  },

  // Soft line break
  break: () => {
    return <br />
  },

  // Indented code block (4+ spaces)
  code(props) {
    return <code>{props.node.value}</code>
  },

  // *italic* or _italic_
  emphasis(props) {
    return (
      <em>
        <DefaultChildren node={props.node} />
      </em>
    )
  },

  // # Heading 1
  heading(props) {
    return (
      <Dynamic component={`h${props.node.depth}`}>
        <DefaultChildren node={props.node} />
      </Dynamic>
    )
  },

  html(props) {
    return <div innerHTML={props.node.value} />
  },

  // ![alt text](image.jpg) or ![alt text](image.jpg "title")
  image(props) {
    return <img src={props.node.url} alt={props.node.alt ?? ''} />
  },

  // `inline code`
  inlineCode(props) {
    return (
      <code
        style={{
          'background-color': 'var(--cm-editor-background, rgba(128, 128, 128, 0.1))',
          padding: '2px 4px',
          'border-radius': '3px',
          'font-family': 'monospace',
        }}
      >
        {props.node.value}
      </code>
    )
  },

  // [link text](url) or [link text](url "title")
  link(props) {
    return (
      <a href={props.node.url} target="_blank" rel="noopener noreferrer">
        <For each={props.node.children}>{node => <DefaultNode node={node} />}</For>
      </a>
    )
  },

  // - bullet list or * bullet list
  // 1. ordered list
  list(props) {
    return (
      <Dynamic component={props.node.ordered ? 'ol' : 'ul'}>
        <DefaultChildren node={props.node} />
      </Dynamic>
    )
  },

  // List item content
  listItem(props) {
    return (
      <li>
        <Show
          when={props.node.spread}
          /* We skip the paragraph node when the list-item is not spread */
          fallback={<DefaultChildren node={props.node.children[0]!} />}
        >
          <DefaultNode node={props.node.children[0]!} />
        </Show>
        <For each={props.node.children.slice(1)}>{node => <DefaultNode node={node} />}</For>
      </li>
    )
  },

  // Regular paragraph text
  paragraph(props) {
    return (
      <p>
        <DefaultChildren node={props.node} />
      </p>
    )
  },

  // **bold** or __bold__
  strong(props) {
    return (
      <strong>
        <DefaultChildren node={props.node} />
      </strong>
    )
  },

  // Plain text content
  text(props) {
    return <>{props.node.value}</>
  },

  tableRow(props) {
    return (
      <tr>
        <DefaultChildren node={props.node} />
      </tr>
    )
  },

  tableCell(props) {
    const context = useContext(TableCellContext)
    return (
      <Dynamic component={context === 'head' ? 'th' : 'td'}>
        <DefaultChildren node={props.node} />
      </Dynamic>
    )
  },

  // | col1 | col2 | table syntax
  table(props) {
    return (
      <table>
        <TableCellContext.Provider value="head">
          <thead>
            <DefaultNode node={props.node.children[0]!} />
          </thead>
        </TableCellContext.Provider>
        <TableCellContext.Provider value="body">
          <tbody>
            <For each={props.node.children.slice(1)}>{row => <DefaultNode node={row} />}</For>
          </tbody>
        </TableCellContext.Provider>
      </table>
    )
  },

  thematicBreak() {
    return <hr />
  },
}

function DefaultChildren(props: { node: RootContent }) {
  return (
    <For each={'children' in props.node ? props.node.children : []}>
      {node => <DefaultNode node={node} />}
    </For>
  )
}

function DefaultNode(props: { node: RootContent }): any {
  const mdRendererProps = useMDRendererProps()
  debug('DefaultNode processing:', props.node)

  const Comp = () =>
    mdRendererProps.renderers?.[props.node.type] ?? DefaultNodeRenderers[props.node.type]

  createEffect(() => {
    const _value = Comp()
    if (!_value) {
      throw new Error(`No Renderer For ${props.node.type}`)
    }
  })

  return (
    <NodeStackContext.Provider value={[props.node, ...useNodeStack()]}>
      <Show when={Comp()} keyed>
        {/* @ts-expect-error */}
        {Comp => <Comp node={props.node} />}
      </Show>
    </NodeStackContext.Provider>
  )
}

export function MdastRenderer(props: MDRendererProps) {
  const root = createMemo(() =>
    fromMarkdown(props.content, {
      extensions: [gfmTable()],
      mdastExtensions: [gfmTableFromMarkdown()],
    }),
  )

  return (
    <MdastRendererPropsContext.Provider value={props}>
      <For each={root().children}>{child => <DefaultNode node={child} />}</For>
    </MdastRendererPropsContext.Provider>
  )
}
