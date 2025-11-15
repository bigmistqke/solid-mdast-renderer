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
        const html = renderComponent("# Heading 1")
        expect(html).toContain('<h1>Heading 1</h1>')
      })

      it('renders ATX heading 2', () => {
        const html = renderComponent("## Heading 2")
        expect(html).toContain('<h2>Heading 2</h2>')
      })

      it('renders ATX heading 3', () => {
        const html = renderComponent("### Heading 3")
        expect(html).toContain('<h3>Heading 3</h3>')
      })

      it('renders ATX heading 4', () => {
        const html = renderComponent("#### Heading 4")
        expect(html).toContain('<h4>Heading 4</h4>')
      })

      it('renders ATX heading 5', () => {
        const html = renderComponent("##### Heading 5")
        expect(html).toContain('<h5>Heading 5</h5>')
      })

      it('renders ATX heading 6', () => {
        const html = renderComponent("###### Heading 6")
        expect(html).toContain('<h6>Heading 6</h6>')
      })

      it('renders Setext heading 1', () => {
        const html = renderComponent("Heading 1\n=========")
        expect(html).toContain('<h1>Heading 1</h1>')
      })

      it('renders Setext heading 2', () => {
        const html = renderComponent("Heading 2\n---------")
        expect(html).toContain('<h2>Heading 2</h2>')
      })
    })

    describe('Paragraphs', () => {
      it('renders a simple paragraph', () => {
        const html = renderComponent("This is a paragraph.")
        expect(html).toContain('This is a paragraph.')
      })

      it('renders multiple paragraphs', () => {
        const html = renderComponent("First paragraph.\n\nSecond paragraph.")
        expect(html).toContain('First paragraph.')
        expect(html).toContain('Second paragraph.')
      })
    })

    describe('Emphasis', () => {
      it('renders italic text with asterisks', () => {
        const html = renderComponent("*italic*")
        expect(html).toContain('<em>')
        expect(html).toContain('italic')
      })

      it('renders italic text with underscores', () => {
        const html = renderComponent("_italic_")
        expect(html).toContain('<em>')
        expect(html).toContain('italic')
      })

      it('renders bold text with double asterisks', () => {
        const html = renderComponent("**bold**")
        expect(html).toContain('<strong>')
        expect(html).toContain('bold')
      })

      it('renders bold text with double underscores', () => {
        const html = renderComponent("__bold__")
        expect(html).toContain('<strong>')
        expect(html).toContain('bold')
      })

      it('renders emphasis within paragraph', () => {
        const html = renderComponent("This is *italic* and **bold** text.")
        expect(html).toContain('<em>')
        expect(html).toContain('italic')
        expect(html).toContain('<strong>')
        expect(html).toContain('bold')
      })
    })

    describe('Strikethrough', () => {
      it('renders strikethrough text', () => {
        const html = renderComponent("~~strikethrough~~")
        expect(html).toContain('<del>')
        expect(html).toContain('strikethrough')
      })

      it('renders strikethrough within paragraph', () => {
        const html = renderComponent("This is ~~deleted~~ text.")
        expect(html).toContain('<del>')
        expect(html).toContain('deleted')
      })
    })
  })

  describe('Lists', () => {
    describe('Unordered lists', () => {
      it('renders bullet list with dashes', () => {
        const html = renderComponent("- Item 1\n- Item 2\n- Item 3")
        expect(html).toContain('<ul>')
        expect(html).toContain('<li>')
        expect(html).toContain('Item 1')
        expect(html).toContain('Item 2')
        expect(html).toContain('Item 3')
      })

      it('renders bullet list with asterisks', () => {
        const html = renderComponent("* Item 1\n* Item 2\n* Item 3")
        expect(html).toContain('<ul>')
        expect(html).toContain('<li>')
        expect(html).toContain('Item 1')
      })

      it('renders bullet list with plus signs', () => {
        const html = renderComponent("+ Item 1\n+ Item 2\n+ Item 3")
        expect(html).toContain('<ul>')
        expect(html).toContain('<li>')
        expect(html).toContain('Item 1')
      })
    })

    describe('Ordered lists', () => {
      it('renders ordered list', () => {
        const html = renderComponent("1. First item\n2. Second item\n3. Third item")
        expect(html).toContain('<ol>')
        expect(html).toContain('<li>')
        expect(html).toContain('First item')
        expect(html).toContain('Second item')
        expect(html).toContain('Third item')
      })

      it('renders ordered list with different starting numbers', () => {
        const html = renderComponent("5. Fifth item\n6. Sixth item\n7. Seventh item")
        expect(html).toContain('<ol>')
        expect(html).toContain('<li>')
        expect(html).toContain('Fifth item')
      })
    })
  })

  describe('Code blocks and inline code', () => {
    describe('Inline code', () => {
      it('renders inline code', () => {
        const html = renderComponent("`code`")
        expect(html).toContain('<code')
        expect(html).toContain('code')
      })

      it('renders inline code within paragraph', () => {
        const html = renderComponent("Use `console.log()` to debug.")
        expect(html).toContain('<code')
        expect(html).toContain('console.log()')
      })
    })

    describe('Code blocks', () => {
      it('renders fenced code block', () => {
        const html = renderComponent("```\nconst x = 1;\nconsole.log(x);\n```")
        expect(html).toContain('<pre')
        expect(html).toContain('<code>')
        expect(html).toContain('const x = 1;')
        expect(html).toContain('console.log(x);')
      })

      it('renders fenced code block with language', () => {
        const html = renderComponent("```javascript\nconst x = 1;\nconsole.log(x);\n```")
        expect(html).toContain('<pre')
        expect(html).toContain('<code>')
        expect(html).toContain('const x = 1;')
      })

      it('renders indented code block', () => {
        const html = renderComponent("    const x = 1;\n    console.log(x);")
        expect(html).toContain('<pre')
        expect(html).toContain('<code>')
        expect(html).toContain('const x = 1;')
      })
    })
  })

  describe('Links and images', () => {
    describe('Links', () => {
      it('renders inline link', () => {
        const html = renderComponent("[OpenAI](https://openai.com)")
        expect(html).toContain('<a')
        expect(html).toContain('href="https://openai.com"')
        expect(html).toContain('OpenAI')
        expect(html).toContain('target="_blank"')
        expect(html).toContain('rel="noopener noreferrer"')
      })

      it('renders autolink', () => {
        const html = renderComponent("<https://openai.com>")
        expect(html).toContain('<a')
        expect(html).toContain('href="https://openai.com"')
        expect(html).toContain('https://openai.com')
      })
    })

    describe('Images', () => {
      it('renders image', () => {
        const html = renderComponent("![Alt text](image.jpg)")
        expect(html).toContain('<img')
        expect(html).toContain('src="image.jpg"')
        expect(html).toContain('alt="Alt text"')
      })
    })
  })

  describe('Blockquotes and horizontal rules', () => {
    describe('Blockquotes', () => {
      it('renders blockquote', () => {
        const html = renderComponent("> This is a blockquote.")
        expect(html).toContain('<blockquote')
        expect(html).toContain('This is a blockquote.')
      })

      it('renders multi-line blockquote', () => {
        const html = renderComponent("> First line\n> Second line")
        expect(html).toContain('<blockquote')
        expect(html).toContain('First line')
        expect(html).toContain('Second line')
      })
    })

    describe('Horizontal rules', () => {
      it('renders horizontal rule with dashes', () => {
        const html = renderComponent("---")
        expect(html).toContain('<hr')
      })

      it('renders horizontal rule with asterisks', () => {
        const html = renderComponent("***")
        expect(html).toContain('<hr')
      })

      it('renders horizontal rule with underscores', () => {
        const html = renderComponent("___")
        expect(html).toContain('<hr')
      })
    })
  })

  describe('Tables', () => {
    it('renders simple table', () => {
      const content = "| Name | Age |\n|------|-----|\n| John | 30  |\n| Jane | 25  |"
      const html = renderComponent(content)
      expect(html).toContain('<table')
      expect(html).toContain('<thead>')
      expect(html).toContain('<tbody>')
      expect(html).toContain('<th')
      expect(html).toContain('<td')
      expect(html).toContain('Name')
      expect(html).toContain('Age')
      expect(html).toContain('John')
      expect(html).toContain('Jane')
    })

    it('renders table with alignment', () => {
      const content = "| Left | Center | Right |\n|:-----|:------:|------:|\n| L1   |   C1   |    R1 |"
      const html = renderComponent(content)
      expect(html).toContain('<table')
      expect(html).toContain('Left')
      expect(html).toContain('Center')
      expect(html).toContain('Right')
    })
  })

  describe('Special syntax', () => {
    describe('Escapes', () => {
      it('handles backslash escapes', () => {
        const html = renderComponent("\\*not italic\\*")
        expect(html).toContain('*not italic*')
        expect(html).not.toContain('<em>')
      })

      it('handles escaped characters', () => {
        const html = renderComponent("\\# Not a header")
        expect(html).toContain('# Not a header')
        expect(html).not.toContain('<h1>')
      })
    })

    describe('HTML entities', () => {
      it('handles HTML entities', () => {
        const html = renderComponent("&amp; &lt; &gt;")
        expect(html).toContain('&')
        expect(html).toContain('<')
        expect(html).toContain('>')
      })

      it('handles special entities', () => {
        const html = renderComponent("&copy; &trade;")
        expect(html).toContain('©')
        expect(html).toContain('™')
      })
    })

    describe('Line breaks', () => {
      it('handles soft line breaks', () => {
        const html = renderComponent("Line one\nLine two")
        expect(html).toContain('Line one')
        expect(html).toContain('Line two')
      })

      it('handles hard line breaks', () => {
        const html = renderComponent("Line one  \nLine two")
        expect(html).toContain('Line one')
        expect(html).toContain('<br')
        expect(html).toContain('Line two')
      })
    })

    describe('Mixed content', () => {
      it('handles complex nested markdown', () => {
        const content = "# Header\n\nThis is a **bold** paragraph with *italic* text and `code`.\n\n- List item with [link](https://example.com)\n- Another item\n\n> Blockquote with **emphasis**"
        const html = renderComponent(content)
        expect(html).toContain('<h1>')
        expect(html).toContain('<strong>')
        expect(html).toContain('<em>')
        expect(html).toContain('<code')
        expect(html).toContain('<ul>')
        expect(html).toContain('<a')
        expect(html).toContain('<blockquote')
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
        expect(html).toContain('<ul>')
        expect(html).toContain('<li>')
        expect(html).toContain('Level 1')
        expect(html).toContain('Level 2')
        expect(html).toContain('Level 3')
        expect(html).toContain('Level 4')
      })

      it('renders mixed nested lists (ordered and unordered)', () => {
        const content = `1. First ordered item
   - Nested unordered item
   - Another nested item
2. Second ordered item
   1. Nested ordered item
   2. Another nested ordered item`
        const html = renderComponent(content)
        expect(html).toContain('<ol>')
        expect(html).toContain('<ul>')
        expect(html).toContain('First ordered item')
        expect(html).toContain('Nested unordered item')
        expect(html).toContain('Nested ordered item')
      })

      it('renders lists with multiple paragraphs in items', () => {
        const content = `1. First item with multiple paragraphs.

   This is the second paragraph of the first item.

2. Second item with code:

   \`\`\`javascript
   console.log('Hello from list');
   \`\`\``
        const html = renderComponent(content)
        expect(html).toContain('<ol>')
        expect(html).toContain('First item with multiple paragraphs')
        expect(html).toContain('This is the second paragraph')
        expect(html).toContain('<pre')
        expect(html).toContain('console.log')
      })
    })

    describe('Nested emphasis', () => {
      it('renders bold within italic', () => {
        const html = renderComponent("*This is italic with **bold** inside*")
        expect(html).toContain('<em>')
        expect(html).toContain('<strong>')
        expect(html).toContain('This is italic')
        expect(html).toContain('bold')
      })

      it('renders italic within bold', () => {
        const html = renderComponent("**This is bold with *italic* inside**")
        expect(html).toContain('<strong>')
        expect(html).toContain('<em>')
        expect(html).toContain('This is bold')
        expect(html).toContain('italic')
      })

      it('renders strikethrough with nested emphasis', () => {
        const html = renderComponent("~~This is deleted with **bold** and *italic* text~~")
        expect(html).toContain('<del>')
        expect(html).toContain('<strong>')
        expect(html).toContain('<em>')
      })

      it('renders complex nested emphasis combinations', () => {
        const html = renderComponent("***This is bold and italic*** with ~~strikethrough **and bold**~~")
        expect(html).toContain('<strong>')
        expect(html).toContain('<em>')
        expect(html).toContain('<del>')
      })
    })

    describe('Links and images in various contexts', () => {
      it('renders links with emphasis', () => {
        const html = renderComponent("[**Bold link**](https://example.com) and [*italic link*](https://test.com)")
        expect(html).toContain('<a')
        expect(html).toContain('<strong>')
        expect(html).toContain('<em>')
        expect(html).toContain('Bold link')
        expect(html).toContain('italic link')
      })

      it('renders images within links', () => {
        const html = renderComponent("[![Alt text](image.jpg)](https://example.com)")
        expect(html).toContain('<a')
        expect(html).toContain('<img')
        expect(html).toContain('href="https://example.com"')
        expect(html).toContain('src="image.jpg"')
      })

      it('renders links in lists', () => {
        const content = `- [Link 1](https://example.com)
- Visit [Google](https://google.com) for search
- Multiple [links](https://a.com) in [one](https://b.com) item`
        const html = renderComponent(content)
        expect(html).toContain('<ul>')
        expect(html).toContain('<a')
        expect(html).toContain('href="https://example.com"')
        expect(html).toContain('href="https://google.com"')
        expect(html).toContain('Link 1')
        expect(html).toContain('Google')
      })

      it('renders code within links', () => {
        const html = renderComponent("[Check out `console.log()`](https://developer.mozilla.org)")
        expect(html).toContain('<a')
        expect(html).toContain('<code')
        expect(html).toContain('console.log()')
        expect(html).toContain('href="https://developer.mozilla.org"')
      })
    })

    describe('Code in various contexts', () => {
      it('renders inline code with emphasis markers that should not be processed', () => {
        const html = renderComponent("`const **bold** = 'not bold';`")
        expect(html).toContain('<code')
        expect(html).toContain('const **bold** =')
        expect(html).not.toContain('<strong>')
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
        expect(html).toContain('<ol>')
        expect(html).toContain('<pre')
        expect(html).toContain('npm install')
        expect(html).toContain('npm start')
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
        expect(html).toContain('<blockquote')
        expect(html).toContain('<pre')
        expect(html).toContain('function hello')
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
        expect(html).toContain('<blockquote')
        expect(html).toContain('This is a blockquote')
        expect(html).toContain('nested blockquote')
        expect(html).toContain('triple nested')
      })

      it('renders blockquotes with emphasis and links', () => {
        const content = `> This is a **bold** statement with [a link](https://example.com)
> 
> And this is *italic* text in the same blockquote`
        const html = renderComponent(content)
        expect(html).toContain('<blockquote')
        expect(html).toContain('<strong>')
        expect(html).toContain('<em>')
        expect(html).toContain('<a')
        expect(html).toContain('bold')
        expect(html).toContain('italic')
      })

      it('renders blockquotes with lists', () => {
        const content = `> This blockquote contains a list:
> 
> 1. First item
> 2. Second item
> 3. Third item`
        const html = renderComponent(content)
        expect(html).toContain('<blockquote')
        expect(html).toContain('<ol>')
        expect(html).toContain('First item')
        expect(html).toContain('Second item')
      })
    })

    describe('Tables with complex content', () => {
      it('renders standalone table correctly', () => {
        const content = `| Name | Age |
|------|-----|
| John | 30  |
| Jane | 25  |`
        const html = renderComponent(content)
        expect(html).toContain('<table')
        expect(html).toContain('<th')
        expect(html).toContain('<td')
        expect(html).toContain('Name')
        expect(html).toContain('Age')
      })

      it('renders tables with emphasis and links', () => {
        const content = `| Name | Description | Link |
|------|-------------|------|
| **Bold Name** | *Italic description* | [Visit](https://example.com) |
| ~~Deprecated~~ | \`code example\` | [GitHub](https://github.com) |`
        const html = renderComponent(content)
        expect(html).toContain('<table')
        expect(html).toContain('<strong>')
        expect(html).toContain('<em>')
        expect(html).toContain('<del>')
        expect(html).toContain('<code')
        expect(html).toContain('<a')
        expect(html).toContain('Bold Name')
        expect(html).toContain('Italic description')
      })

      it('renders tables with images', () => {
        const content = `| Icon | Name | Description |
|------|------|-------------|
| ![Icon](icon.png) | Project | Main project |
| ![Logo](logo.svg) | Brand | Company brand |`
        const html = renderComponent(content)
        expect(html).toContain('<table')
        expect(html).toContain('<img')
        expect(html).toContain('src="icon.png"')
        expect(html).toContain('src="logo.svg"')
        expect(html).toContain('alt="Icon"')
        expect(html).toContain('alt="Logo"')
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
        expect(html).toContain('<h1>')
        expect(html).toContain('<h2>')
        expect(html).toContain('<h3>')
        expect(html).toContain('<strong>')
        expect(html).toContain('<em>')
        expect(html).toContain('<ol>')
        expect(html).toContain('<ul>')
        expect(html).toContain('<li>')
        expect(html).toContain('<code')
        expect(html).toContain('<pre')
        expect(html).toContain('<blockquote')
        expect(html).toContain('<hr')
        expect(html).toContain('<img')
        expect(html).toContain('<a')
        
        // Check for specific content
        expect(html).toContain('Main Title')
        expect(html).toContain('complex document')
        expect(html).toContain('function example')
        expect(html).toContain('Hello World')
        expect(html).toContain('src="test.jpg"')
        expect(html).toContain('href="https://automatic.link"')
      })

      it('renders edge case with consecutive emphasis', () => {
        const html = renderComponent("This has **bold** and **more bold** and *italic* and *more italic* text.")
        expect(html).toContain('<strong>')
        expect(html).toContain('<em>')
        expect(html).toContain('bold')
        expect(html).toContain('more bold')
        expect(html).toContain('italic')
        expect(html).toContain('more italic')
      })

      it('renders emphasis across line breaks', () => {
        const content = `This is **bold text that
continues on the next line**`
        const html = renderComponent(content)
        expect(html).toContain('<strong>')
        expect(html).toContain('bold text that')
        expect(html).toContain('continues on')
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
        expect(html).toContain('<h2>')
        expect(html).toContain('<ol>')
        expect(html).toContain('<ul>')
        expect(html).toContain('<blockquote')
        expect(html).toContain('<strong>')
        expect(html).toContain('<pre')
        expect(html).toContain('Hello from Python')
      })
    })

    describe('Edge cases and malformed content', () => {
      it('handles unbalanced emphasis markers', () => {
        const html = renderComponent("This has **unbalanced bold and *mixed emphasis**")
        // Should handle gracefully without breaking
        expect(html).toBeDefined()
        expect(html).toContain('unbalanced')
      })

      it('handles empty code blocks', () => {
        const html = renderComponent("```\n```")
        expect(html).toContain('<pre')
        expect(html).toContain('<code>')
      })

      it('handles code blocks without closing', () => {
        const html = renderComponent("```javascript\nconst x = 1;")
        expect(html).toBeDefined()
        expect(html).toContain('const x = 1')
      })

      it('handles consecutive same emphasis types correctly', () => {
        const html = renderComponent("**This is **nested** bold**")
        // Should NOT create nested strong tags
        // Expected: <strong>This is </strong>nested<strong> bold</strong>
        const strongMatches = html.match(/<strong>/g) || []
        expect(strongMatches.length).toBe(2)
        
        // Verify no nested strong tags exist
        expect(html).not.toMatch(/<strong>.*<strong>/s)
        
        // Verify the structure is correct
        expect(html).toContain('<strong>This is </strong>')
        expect(html).toContain('<strong> bold</strong>')
        expect(html).toContain('</strong>nested<strong>')
      })

      it('handles consecutive italic emphasis correctly', () => {
        const html = renderComponent("*This is *nested* italic*")
        // Should parse as: <em>This is </em>nested<em> italic</em>
        const emMatches = html.match(/<em>/g) || []
        expect(emMatches.length).toBe(2)
        
        // Verify no nested em tags exist
        expect(html).not.toMatch(/<em>.*<em>/s)
        
        expect(html).toContain('<em>This is </em>')
        expect(html).toContain('<em> italic</em>')
      })

      it('handles triple asterisk emphasis correctly', () => {
        const html = renderComponent("***This is ***nested*** bold italic***")
        // Should parse as: <em><strong>This is </strong></em>nested<em><strong> bold italic</strong></em>
        
        // Verify no improperly nested tags
        expect(html).not.toMatch(/<strong>.*<strong>/s)
        expect(html).not.toMatch(/<em>.*<em>/s)
      })

      it('handles proper separated emphasis correctly', () => {
        // This is the correct way to have multiple emphasized sections
        const html = renderComponent("**this** is **bold**")
        
        // Should have exactly 2 strong tags
        const strongMatches = html.match(/<strong>/g) || []
        expect(strongMatches.length).toBe(2)
        
        // Verify correct structure
        expect(html).toContain('<strong>this</strong>')
        expect(html).toContain('<strong>bold</strong>')
        expect(html).toContain('</strong> is <strong>')
        
        // This test should pass - properly separated emphasis is correct
      })

      it('handles links without URLs', () => {
        const html = renderComponent("[Link text]()")
        expect(html).toContain('Link text')
      })

      it('handles images without src', () => {
        const html = renderComponent("![Alt text]()")
        expect(html).toContain('<img')
        expect(html).toContain('alt="Alt text"')
      })

      it('handles empty table cells', () => {
        const content = `| Col1 | Col2 | Col3 |
|------|------|------|
| Data |      | More |
|      | Data |      |`
        const html = renderComponent(content)
        expect(html).toContain('<table')
        expect(html).toContain('<td')
        expect(html).toContain('Data')
        expect(html).toContain('More')
      })
    })

    describe('Task lists and checkboxes', () => {
      it('renders task lists with checkboxes', () => {
        const content = `- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task`
        const html = renderComponent(content)
        expect(html).toContain('<ul>')
        expect(html).toContain('<li>')
        expect(html).toContain('Completed task')
        expect(html).toContain('Incomplete task')
      })

      it('renders nested task lists', () => {
        const content = `- [x] Main task
  - [x] Subtask 1
  - [ ] Subtask 2
    - [x] Sub-subtask`
        const html = renderComponent(content)
        expect(html).toContain('<ul>')
        expect(html).toContain('Main task')
        expect(html).toContain('Subtask 1')
        expect(html).toContain('Sub-subtask')
      })
    })

    describe('Performance with large content', () => {
      it('handles large documents efficiently', () => {
        const largeContent = Array(100).fill(0).map((_, i) => 
          `## Section ${i + 1}\n\nThis is paragraph ${i + 1} with **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n`
        ).join('\n')
        
        const html = renderComponent(largeContent)
        expect(html).toContain('<h2>')
        expect(html).toContain('Section 1')
        expect(html).toContain('Section 100')
        expect(html).toContain('<strong>')
        expect(html).toContain('<em>')
        expect(html).toContain('<ul>')
      })
    })
  })

  describe('Custom renderers', () => {
    it('allows custom paragraph renderer', () => {
      const customRenderers = {
        Paragraph: ({ node }: { node: any }) => <div class="custom-paragraph">{node.content}</div>
      }
      const html = renderComponent("Test paragraph", customRenderers)
      expect(html).toContain('class="custom-paragraph"')
      expect(html).toContain('<div')
    })

    it('falls back to default renderer when custom not provided', () => {
      const customRenderers = {
        Paragraph: ({ node }: { node: any }) => <div class="custom-paragraph">{node.content}</div>
      }
      const html = renderComponent("# Header", customRenderers)
      expect(html).toContain('<h1>')
    })

    it('allows custom emphasis renderer', () => {
      const customRenderers = {
        Emphasis: ({ node }: { node: any }) => <span class="custom-italic">{node.content}</span>
      }
      const html = renderComponent("This is *custom italic* text", customRenderers)
      expect(html).toContain('class="custom-italic"')
      expect(html).not.toContain('<em>')
    })

    it('allows custom link renderer with additional attributes', () => {
      const customRenderers = {
        Link: ({ node }: { node: any }) => <a href="#" class="custom-link" data-original={node.content}>Custom Link</a>
      }
      const html = renderComponent("[Original Link](https://example.com)", customRenderers)
      expect(html).toContain('class="custom-link"')
      expect(html).toContain('Custom Link')
    })

    it('allows chaining of custom renderers', () => {
      const customRenderers = {
        StrongEmphasis: ({ node }: { node: any }) => <b class="custom-bold">{node.content}</b>,
        Emphasis: ({ node }: { node: any }) => <i class="custom-italic">{node.content}</i>
      }
      const html = renderComponent("**Bold** and *italic* text", customRenderers)
      expect(html).toContain('class="custom-bold"')
      expect(html).toContain('class="custom-italic"')
      expect(html).toContain('<b')
      expect(html).toContain('<i')
    })
  })
})