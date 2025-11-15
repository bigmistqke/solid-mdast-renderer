import { render } from 'solid-js/web'
import { describe, expect, it } from 'vitest'
import { MDRenderer } from '../src'

function renderComponent(content: string, renderers?: any): string {
  let html = ''
  const div = document.createElement('div')
  document.body.appendChild(div)

  render(() => <MDRenderer content={content} renderers={renderers} />, div)
  html = div.innerHTML

  document.body.removeChild(div)
  return html
}

describe('MDRenderer', () => {
  describe('Basic markdown features', () => {
    describe('Headers', () => {
      it('renders ATX heading 1', () => {
        const html = renderComponent('# Heading 1')
        expect(html).toMatchSnapshot()
      })

      it('renders ATX heading 2', () => {
        const html = renderComponent('## Heading 2')
        expect(html).toMatchSnapshot()
      })

      it('renders ATX heading 3', () => {
        const html = renderComponent('### Heading 3')
        expect(html).toMatchSnapshot()
      })

      it('renders ATX heading 4', () => {
        const html = renderComponent('#### Heading 4')
        expect(html).toMatchSnapshot()
      })

      it('renders ATX heading 5', () => {
        const html = renderComponent('##### Heading 5')
        expect(html).toMatchSnapshot()
      })

      it('renders ATX heading 6', () => {
        const html = renderComponent('###### Heading 6')
        expect(html).toMatchSnapshot()
      })

      it('renders Setext heading 1', () => {
        const html = renderComponent('Heading 1\n=========')
        expect(html).toMatchSnapshot()
      })

      it('renders Setext heading 2', () => {
        const html = renderComponent('Heading 2\n---------')
        expect(html).toMatchSnapshot()
      })
    })

    describe('Paragraphs', () => {
      it('renders a simple paragraph', () => {
        const html = renderComponent('This is a paragraph.')
        expect(html).toMatchSnapshot()
      })

      it('renders multiple paragraphs', () => {
        const html = renderComponent('First paragraph.\n\nSecond paragraph.')
        expect(html).toMatchSnapshot()
      })
    })

    describe('Emphasis', () => {
      it('renders italic text with asterisks', () => {
        const html = renderComponent('*italic*')
        expect(html).toMatchSnapshot()
      })

      it('renders italic text with underscores', () => {
        const html = renderComponent('_italic_')
        expect(html).toMatchSnapshot()
      })

      it('renders bold text with double asterisks', () => {
        const html = renderComponent('**bold**')
        expect(html).toMatchSnapshot()
      })

      it('renders bold text with double underscores', () => {
        const html = renderComponent('__bold__')
        expect(html).toMatchSnapshot()
      })

      it('renders emphasis within paragraph', () => {
        const html = renderComponent('This is *italic* and **bold** text.')
        expect(html).toMatchSnapshot()
      })
    })

    describe('Strikethrough', () => {
      it('renders strikethrough text', () => {
        const html = renderComponent('~~strikethrough~~')
        expect(html).toMatchSnapshot()
      })

      it('renders strikethrough within paragraph', () => {
        const html = renderComponent('This is ~~deleted~~ text.')
        expect(html).toMatchSnapshot()
      })
    })
  })

  describe('Lists', () => {
    describe('Unordered lists', () => {
      it('renders bullet list with dashes', () => {
        const html = renderComponent('- Item 1\n- Item 2\n- Item 3')
        expect(html).toMatchSnapshot()
      })

      it('renders bullet list with asterisks', () => {
        const html = renderComponent('* Item 1\n* Item 2\n* Item 3')
        expect(html).toMatchSnapshot()
      })

      it('renders bullet list with plus signs', () => {
        const html = renderComponent('+ Item 1\n+ Item 2\n+ Item 3')
        expect(html).toMatchSnapshot()
      })
    })

    describe('Ordered lists', () => {
      it('renders ordered list', () => {
        const html = renderComponent('1. First item\n2. Second item\n3. Third item')
        expect(html).toMatchSnapshot()
      })

      it('renders ordered list with different starting numbers', () => {
        const html = renderComponent('5. Fifth item\n6. Sixth item\n7. Seventh item')
        expect(html).toMatchSnapshot()
      })
    })
  })

  describe('Code blocks and inline code', () => {
    describe('Inline code', () => {
      it('renders inline code', () => {
        const html = renderComponent('`code`')
        expect(html).toMatchSnapshot()
      })

      it('renders inline code within paragraph', () => {
        const html = renderComponent('Use `console.log()` to debug.')
        expect(html).toMatchSnapshot()
      })
    })

    describe('Code blocks', () => {
      it('renders fenced code block', () => {
        const html = renderComponent('```\nconst x = 1;\nconsole.log(x);\n```')
        expect(html).toMatchSnapshot()
      })

      it('renders fenced code block with language', () => {
        const html = renderComponent('```javascript\nconst x = 1;\nconsole.log(x);\n```')
        expect(html).toMatchSnapshot()
      })

      it('renders indented code block', () => {
        const html = renderComponent('    const x = 1;\n    console.log(x);')
        expect(html).toMatchSnapshot()
      })
    })
  })

  describe('Links and images', () => {
    describe('Links', () => {
      it('renders inline link', () => {
        const html = renderComponent('[Example.com](https://example.com)')
        expect(html).toMatchSnapshot()
      })

      it('renders autolink', () => {
        const html = renderComponent('<https://example.com>')
        expect(html).toMatchSnapshot()
      })
    })

    describe('Images', () => {
      it('renders image', () => {
        const html = renderComponent('![Alt text](image.jpg)')
        expect(html).toMatchSnapshot()
      })
    })
  })

  describe('Blockquotes and horizontal rules', () => {
    describe('Blockquotes', () => {
      it('renders blockquote', () => {
        const html = renderComponent('> This is a blockquote.')
        expect(html).toMatchSnapshot()
      })

      it('renders multi-line blockquote', () => {
        const html = renderComponent('> First line\n> Second line')
        expect(html).toMatchSnapshot()
      })
    })

    describe('Horizontal rules', () => {
      it('renders horizontal rule with dashes', () => {
        const html = renderComponent('---')
        expect(html).toMatchSnapshot()
      })

      it('renders horizontal rule with asterisks', () => {
        const html = renderComponent('***')
        expect(html).toMatchSnapshot()
      })

      it('renders horizontal rule with underscores', () => {
        const html = renderComponent('___')
        expect(html).toMatchSnapshot()
      })
    })
  })

  describe('Tables', () => {
    it('renders simple table', () => {
      const content = '| Name | Age |\n|------|-----|\n| John | 30  |\n| Jane | 25  |'
      const html = renderComponent(content)
      expect(html).toMatchSnapshot()
    })

    it('renders table with alignment', () => {
      const content =
        '| Left | Center | Right |\n|:-----|:------:|------:|\n| L1   |   C1   |    R1 |'
      const html = renderComponent(content)
      expect(html).toMatchSnapshot()
    })
  })

  describe('Special syntax', () => {
    describe('Escapes', () => {
      it('handles backslash escapes', () => {
        const html = renderComponent('\\*not italic\\*')
        expect(html).toMatchSnapshot()
      })

      it('handles escaped characters', () => {
        const html = renderComponent('\\# Not a header')
        expect(html).toMatchSnapshot()
      })
    })

    describe('HTML entities', () => {
      it('handles HTML entities', () => {
        const html = renderComponent('&amp; &lt; &gt;')
        expect(html).toMatchSnapshot()
      })

      it('handles special entities', () => {
        const html = renderComponent('&copy; &trade;')
        expect(html).toMatchSnapshot()
      })
    })

    describe('Line breaks', () => {
      it('handles soft line breaks', () => {
        const html = renderComponent('Line one\nLine two')
        expect(html).toMatchSnapshot()
      })

      it('handles hard line breaks', () => {
        const html = renderComponent('Line one  \nLine two')
        expect(html).toMatchSnapshot()
      })
    })

    describe('Mixed content', () => {
      it('handles complex nested markdown', () => {
        const content =
          '# Header\n\nThis is a **bold** paragraph with *italic* text and `code`.\n\n- List item with [link](https://example.com)\n- Another item\n\n> Blockquote with **emphasis**'
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })
    })
  })

  describe('Nested and complex scenarios', () => {
    describe('Nested lists', () => {
      it('renders deeply nested unordered lists', () => {
        const content = `- Level 1
  - Level 2
    - Level 3
      - Level 4`
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })

      it('renders mixed nested lists (ordered and unordered)', () => {
        const content = `1. First ordered item
   - Nested unordered item
   - Another nested item
2. Second ordered item
   1. Nested ordered item
   2. Another nested ordered item`
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })

      it('renders lists with multiple paragraphs in items', () => {
        const content = `1. First item with multiple paragraphs.

   This is the second paragraph of the first item.

2. Second item with code:

   \`\`\`javascript
   console.log('Hello from list');
   \`\`\``
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })
    })

    describe('Nested emphasis', () => {
      it('renders bold within italic', () => {
        const html = renderComponent('*This is italic with **bold** inside*')
        expect(html).toMatchSnapshot()
      })

      it('renders italic within bold', () => {
        const html = renderComponent('**This is bold with *italic* inside**')
        expect(html).toMatchSnapshot()
      })

      it('renders strikethrough with nested emphasis', () => {
        const html = renderComponent('~~This is deleted with **bold** and *italic* text~~')
        expect(html).toMatchSnapshot()
      })

      it('renders complex nested emphasis combinations', () => {
        const html = renderComponent(
          '***This is bold and italic*** with ~~strikethrough **and bold**~~',
        )
        expect(html).toMatchSnapshot()
      })
    })

    describe('Links and images in various contexts', () => {
      it('renders links with emphasis', () => {
        const html = renderComponent(
          '[**Bold link**](https://example.com) and [*italic link*](https://test.com)',
        )
        expect(html).toMatchSnapshot()
      })

      it('renders images within links', () => {
        const html = renderComponent('[![Alt text](image.jpg)](https://example.com)')
        expect(html).toMatchSnapshot()
      })

      it('renders links in lists', () => {
        const content = `- [Link 1](https://example.com)
- Visit [Google](https://google.com) for search
- Multiple [links](https://a.com) in [one](https://b.com) item`
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })

      it('renders code within links', () => {
        const html = renderComponent('[Check out `console.log()`](https://developer.mozilla.org)')
        expect(html).toMatchSnapshot()
      })
    })

    describe('Code in various contexts', () => {
      it('renders inline code with emphasis markers that should not be processed', () => {
        const html = renderComponent("`const **bold** = 'not bold';`")
        expect(html).toMatchSnapshot()
      })

      it('renders code blocks in lists', () => {
        const content = `1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run the application:
   \`\`\`javascript
   npm start
   \`\`\``
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })

      it('renders code blocks in blockquotes', () => {
        const content = `> Here's an example:
> 
> \`\`\`javascript
> function hello() {
>   return "world";
> }
> \`\`\``
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })
    })

    describe('Blockquotes', () => {
      it('renders nested blockquotes', () => {
        const content = `> This is a blockquote
> 
> > This is a nested blockquote
> > 
> > > And this is triple nested`
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })

      it('renders blockquotes with emphasis and links', () => {
        const content = `> This is a **bold** statement with [a link](https://example.com)
> 
> And this is *italic* text in the same blockquote`
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })

      it('renders blockquotes with lists', () => {
        const content = `> This blockquote contains a list:
> 
> 1. First item
> 2. Second item
> 3. Third item`
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })
    })

    describe('Tables with complex content', () => {
      it('renders standalone table correctly', () => {
        const content = `| Name | Age |
|------|-----|
| John | 30  |
| Jane | 25  |`
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })

      it('renders tables with emphasis and links', () => {
        const content = `| Name | Description | Link |
|------|-------------|------|
| **Bold Name** | *Italic description* | [Visit](https://example.com) |
| ~~Deprecated~~ | \`code example\` | [GitHub](https://github.com) |`
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })

      it('renders tables with images', () => {
        const content = `| Icon | Name | Description |
|------|------|-------------|
| ![Icon](icon.png) | Project | Main project |
| ![Logo](logo.svg) | Brand | Company brand |`
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })
    })

    describe('Mixed content scenarios', () => {
      it('renders complex document with all features', () => {
        const content = `# Main Title

This is a **complex document** with *various* elements.

## Features

1. **Lists** with nested items:
   - Unordered nested list
   - Another item with \`inline code\`

2. **Code blocks** with different languages:
   \`\`\`javascript
   function example() {
     return "Hello World";
   }
   \`\`\`

3. **Tables** with complex content

## Quotes and More

> This is a blockquote with **emphasis** and a [link](https://test.com).
> 
> > Nested quote with \`code\`

---

### Final Notes

Check out this image: ![Example](test.jpg)

And this autolink: <https://automatic.link>`
        const html = renderComponent(content)

        // Check for all major elements
        expect(html).toMatchSnapshot()
      })

      it('renders edge case with consecutive emphasis', () => {
        const html = renderComponent(
          'This has **bold** and **more bold** and *italic* and *more italic* text.',
        )
        expect(html).toMatchSnapshot()
      })

      it('renders emphasis across line breaks', () => {
        const content = `This is **bold text that
continues on the next line**`
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })

      it('renders mixed list types in complex document', () => {
        const content = `## Mixed Lists

1. Ordered item one
   - Nested unordered
   - Another nested
     1. Deep nested ordered
     2. Another deep ordered

2. Ordered item two
   > With a blockquote
   > 
   > And **emphasis**

3. Ordered item three with code:
   \`\`\`python
   print("Hello from Python")
   \`\`\``
        const html = renderComponent(content)
        expect(html).toBeDefined()
        expect(html).toContain('<h2>Mixed Lists</h2>')
        expect(html).toContain('<ol><li> <span>Ordered item one</span>')
      })
    })

    describe('Edge cases and malformed content', () => {
      it('handles unbalanced emphasis markers', () => {
        const html = renderComponent('This has **unbalanced bold and *mixed emphasis**')
        // Should handle gracefully without breaking
        expect(html).toBeDefined()
        expect(html).toMatchSnapshot()
      })

      it('handles empty code blocks', () => {
        const html = renderComponent('```\n```')
        expect(html).toMatchSnapshot()
      })

      it('handles code blocks without closing', () => {
        const html = renderComponent('```javascript\nconst x = 1;')
        expect(html).toBeDefined()
        expect(html).toMatchSnapshot()
      })

      it('handles consecutive same emphasis types correctly', () => {
        const html = renderComponent('**This is** nested **bold**')
        expect(html).toMatchSnapshot()
      })

      it('handles consecutive italic emphasis correctly', () => {
        const html = renderComponent('*This is* nested *italic*')
        expect(html).toMatchSnapshot()
      })

      it('handles triple asterisk emphasis correctly', () => {
        const html = renderComponent('***This is*** nested ***bold italic***')
        expect(html).toMatchSnapshot()
      })

      it('handles proper separated emphasis correctly', () => {
        const html = renderComponent('**this** is **bold**')
        expect(html).toMatchSnapshot()
      })

      it('handles links without URLs', () => {
        const html = renderComponent('[Link text]()')
        expect(html).toMatchSnapshot()
      })

      it('handles images without src', () => {
        const html = renderComponent('![Alt text]()')
        expect(html).toMatchSnapshot()
      })

      it('handles empty table cells', () => {
        const content = `| Col1 | Col2 | Col3 |
|------|------|------|
| Data |      | More |
|      | Data |      |`
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })
    })

    describe('Task lists and checkboxes', () => {
      it('renders task lists with checkboxes', () => {
        const content = `- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task`
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })

      it('renders nested task lists', () => {
        const content = `- [x] Main task
  - [x] Subtask 1
  - [ ] Subtask 2
    - [x] Sub-subtask`
        const html = renderComponent(content)
        expect(html).toMatchSnapshot()
      })
    })

    describe('Performance with large content', () => {
      it('handles large documents efficiently', () => {
        const largeContent = Array(100)
          .fill(0)
          .map(
            (_, i) =>
              `## Section ${i + 1}\n\nThis is paragraph ${
                i + 1
              } with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n`,
          )
          .join('\n')

        const html = renderComponent(largeContent)
        expect(html).toBeDefined()
        expect(html.length).toBeGreaterThan(1000)
      })
    })
  })

  describe('Custom renderers', () => {
    it('allows custom paragraph renderer', () => {
      const customRenderers = {
        Paragraph: ({ node }: { node: any }) => <div class="custom-paragraph">{node.content}</div>,
      }
      const html = renderComponent('Test paragraph', customRenderers)
      expect(html).toMatchSnapshot()
    })

    it('falls back to default renderer when custom not provided', () => {
      const customRenderers = {
        Paragraph: ({ node }: { node: any }) => <div class="custom-paragraph">{node.content}</div>,
      }
      const html = renderComponent('# Header', customRenderers)
      expect(html).toMatchSnapshot()
    })

    it('allows custom emphasis renderer', () => {
      const customRenderers = {
        Emphasis: ({ node }: { node: any }) => <span class="custom-italic">{node.content}</span>,
      }
      const html = renderComponent('This is *custom italic* text', customRenderers)
      expect(html).toMatchSnapshot()
    })

    it('allows custom link renderer with additional attributes', () => {
      const customRenderers = {
        Link: ({ node }: { node: any }) => (
          <a href="#" class="custom-link" data-original={node.content}>
            Custom Link
          </a>
        ),
      }
      const html = renderComponent('[Original Link](https://example.com)', customRenderers)
      expect(html).toMatchSnapshot()
    })

    it('allows chaining of custom renderers', () => {
      const customRenderers = {
        StrongEmphasis: ({ node }: { node: any }) => <b class="custom-bold">{node.content}</b>,
        Emphasis: ({ node }: { node: any }) => <i class="custom-italic">{node.content}</i>,
      }
      const html = renderComponent('**Bold** and *italic* text', customRenderers)
      expect(html).toMatchSnapshot()
    })
  })
})
