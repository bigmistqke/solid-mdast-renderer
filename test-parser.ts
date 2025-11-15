import type { SyntaxNode } from '@lezer/common'
import { parser as markdownParser, Strikethrough, Table } from '@lezer/markdown'

// Use the same parser configuration
const parser = markdownParser.configure([Table, Strikethrough])

interface MDNode {
  type: string
  from: number
  to: number
  children: MDNode[]
  content: string
}

// Copy of the parseMarkdownTree function from index.tsx
function parseMarkdownTree(node: SyntaxNode, input: string): MDNode {
  const children: MDNode[] = []
  let child = node.firstChild

  // If this is a paragraph or similar container, we need to handle text between children
  const textContainerTypes = [
    'Paragraph',
    'Emphasis',
    'StrongEmphasis',
    'Link',
    'LinkLabel',
    'Strikethrough',
    'ListItem',
    'TaskListItem',
    'Blockquote',
    'TableCell',
    'TableHeader',
    'Table',
    'TableRow',
  ]

  if (child && textContainerTypes.includes(node.name)) {
    let lastEnd = node.from

    // For list items, skip the list marker
    if ((node.name === 'ListItem' || node.name === 'TaskListItem') && child?.name === 'ListMark') {
      lastEnd = child.to
      child = child.nextSibling

      // For task lists, also skip the task marker that follows
      if (node.name === 'TaskListItem' && child?.name === 'TaskMarker') {
        lastEnd = child.to
        child = child.nextSibling
      }
    }

    while (child) {
      console.log(`  Processing child: ${child.name} [${child.from}-${child.to}], lastEnd: ${lastEnd}`)
      
      // Add any text between the last child and this child
      if (child.from > lastEnd) {
        const textContent = input.slice(lastEnd, child.from)
        console.log(`  Adding text between ${lastEnd} and ${child.from}: "${textContent}"`)
        if (textContent) {
          children.push({
            type: 'Text',
            from: lastEnd,
            to: child.from,
            content: textContent,
            children: [],
          })
        }
      }

      // Skip various mark types during parsing
      const skipInParsing = [
        'TaskMarker',
        'QuoteMark',
        'BlockQuoteMark',
        'StrikethroughMark',
        'TableDelimiter',
        'HeaderMark',
        'TableDelimiterRow',
        'LinkMark',
        // NOTE: EmphasisMark is NOT in this list!
      ]
      if (skipInParsing.includes(child.name)) {
        lastEnd = child.to
        child = child.nextSibling
        continue
      }

      children.push(parseMarkdownTree(child, input))
      lastEnd = child.to
      child = child.nextSibling
    }

    // Add any remaining text after the last child
    if (lastEnd < node.to) {
      const textContent = input.slice(lastEnd, node.to)
      console.log(`  Adding remaining text from ${lastEnd} to ${node.to}: "${textContent}"`)
      if (textContent) {
        children.push({
          type: 'Text',
          from: lastEnd,
          to: node.to,
          content: textContent,
          children: [],
        })
      }
    }
  } else {
    // For other node types, just parse children normally
    while (child) {
      children.push(parseMarkdownTree(child, input))
      child = child.nextSibling
    }
  }

  return {
    type: node.name,
    from: node.from,
    to: node.to,
    content: input.slice(node.from, node.to),
    children,
  }
}

function printMDNode(node: MDNode, indent = 0): void {
  const spaces = ' '.repeat(indent * 2)
  const escapedContent = node.content.replace(/\n/g, '\\n').replace(/\t/g, '\\t')
  console.log(`${spaces}${node.type} [${node.from}-${node.to}]: "${escapedContent}"`)
  
  node.children.forEach(child => printMDNode(child, indent + 1))
}

// Test the problematic case
const testInput = '**This is **nested** bold**'
console.log('Testing input:', JSON.stringify(testInput))
console.log('\nParsing with current logic:')
console.log('=' .repeat(60))

const tree = parser.parse(testInput)
const mdNode = parseMarkdownTree(tree.topNode, testInput)
printMDNode(mdNode)