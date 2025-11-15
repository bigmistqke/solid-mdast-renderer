// Auto-extracted test specifications
// This structure mirrors the test cases and can be used to generate the test viewer

export interface TestCase {
  name: string
  content: string
  snapshotKey: string
}

export interface TestCategory {
  category: string
  tests: TestCase[]
}

export const testSpec: TestCategory[] = [
  {
    "category": "MDRenderer > Basic markdown features > Headers",
    "tests": [
      {
        "name": "renders ATX heading 1",
        "content": "# Heading 1",
        "snapshotKey": "MDRenderer > Basic markdown features > Headers > renders ATX heading 1 1"
      },
      {
        "name": "renders ATX heading 2",
        "content": "## Heading 2",
        "snapshotKey": "MDRenderer > Basic markdown features > Headers > renders ATX heading 2 1"
      },
      {
        "name": "renders ATX heading 3",
        "content": "### Heading 3",
        "snapshotKey": "MDRenderer > Basic markdown features > Headers > renders ATX heading 3 1"
      },
      {
        "name": "renders ATX heading 4",
        "content": "#### Heading 4",
        "snapshotKey": "MDRenderer > Basic markdown features > Headers > renders ATX heading 4 1"
      },
      {
        "name": "renders ATX heading 5",
        "content": "##### Heading 5",
        "snapshotKey": "MDRenderer > Basic markdown features > Headers > renders ATX heading 5 1"
      },
      {
        "name": "renders ATX heading 6",
        "content": "###### Heading 6",
        "snapshotKey": "MDRenderer > Basic markdown features > Headers > renders ATX heading 6 1"
      },
      {
        "name": "renders Setext heading 1",
        "content": "Heading 1\n=========",
        "snapshotKey": "MDRenderer > Basic markdown features > Headers > renders Setext heading 1 1"
      },
      {
        "name": "renders Setext heading 2",
        "content": "Heading 2\n---------",
        "snapshotKey": "MDRenderer > Basic markdown features > Headers > renders Setext heading 2 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Basic markdown features > Paragraphs",
    "tests": [
      {
        "name": "renders a simple paragraph",
        "content": "This is a paragraph.",
        "snapshotKey": "MDRenderer > Basic markdown features > Paragraphs > renders a simple paragraph 1"
      },
      {
        "name": "renders multiple paragraphs",
        "content": "First paragraph.\n\nSecond paragraph.",
        "snapshotKey": "MDRenderer > Basic markdown features > Paragraphs > renders multiple paragraphs 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Basic markdown features > Emphasis",
    "tests": [
      {
        "name": "renders italic text with asterisks",
        "content": "*italic*",
        "snapshotKey": "MDRenderer > Basic markdown features > Emphasis > renders italic text with asterisks 1"
      },
      {
        "name": "renders italic text with underscores",
        "content": "_italic_",
        "snapshotKey": "MDRenderer > Basic markdown features > Emphasis > renders italic text with underscores 1"
      },
      {
        "name": "renders bold text with double asterisks",
        "content": "**bold**",
        "snapshotKey": "MDRenderer > Basic markdown features > Emphasis > renders bold text with double asterisks 1"
      },
      {
        "name": "renders bold text with double underscores",
        "content": "__bold__",
        "snapshotKey": "MDRenderer > Basic markdown features > Emphasis > renders bold text with double underscores 1"
      },
      {
        "name": "renders emphasis within paragraph",
        "content": "This is *italic* and **bold** text.",
        "snapshotKey": "MDRenderer > Basic markdown features > Emphasis > renders emphasis within paragraph 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Basic markdown features > Strikethrough",
    "tests": [
      {
        "name": "renders strikethrough text",
        "content": "~~strikethrough~~",
        "snapshotKey": "MDRenderer > Basic markdown features > Strikethrough > renders strikethrough text 1"
      },
      {
        "name": "renders strikethrough within paragraph",
        "content": "This is ~~deleted~~ text.",
        "snapshotKey": "MDRenderer > Basic markdown features > Strikethrough > renders strikethrough within paragraph 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Lists > Unordered lists",
    "tests": [
      {
        "name": "renders bullet list with dashes",
        "content": "- Item 1\n- Item 2\n- Item 3",
        "snapshotKey": "MDRenderer > Lists > Unordered lists > renders bullet list with dashes 1"
      },
      {
        "name": "renders bullet list with asterisks",
        "content": "* Item 1\n* Item 2\n* Item 3",
        "snapshotKey": "MDRenderer > Lists > Unordered lists > renders bullet list with asterisks 1"
      },
      {
        "name": "renders bullet list with plus signs",
        "content": "+ Item 1\n+ Item 2\n+ Item 3",
        "snapshotKey": "MDRenderer > Lists > Unordered lists > renders bullet list with plus signs 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Lists > Ordered lists",
    "tests": [
      {
        "name": "renders ordered list",
        "content": "1. First item\n2. Second item\n3. Third item",
        "snapshotKey": "MDRenderer > Lists > Ordered lists > renders ordered list 1"
      },
      {
        "name": "renders ordered list with different starting numbers",
        "content": "5. Fifth item\n6. Sixth item\n7. Seventh item",
        "snapshotKey": "MDRenderer > Lists > Ordered lists > renders ordered list with different starting numbers 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Code blocks and inline code > Inline code",
    "tests": [
      {
        "name": "renders inline code within paragraph",
        "content": "Use ",
        "snapshotKey": "MDRenderer > Code blocks and inline code > Inline code > renders inline code within paragraph 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Code blocks and inline code > Code blocks",
    "tests": [
      {
        "name": "renders indented code block",
        "content": "    const x = 1;\n    console.log(x);",
        "snapshotKey": "MDRenderer > Code blocks and inline code > Code blocks > renders indented code block 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Links and images > Links",
    "tests": [
      {
        "name": "renders inline link",
        "content": "[Example.com](https://example.com)",
        "snapshotKey": "MDRenderer > Links and images > Links > renders inline link 1"
      },
      {
        "name": "renders autolink",
        "content": "<https://example.com>",
        "snapshotKey": "MDRenderer > Links and images > Links > renders autolink 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Links and images > Images",
    "tests": [
      {
        "name": "renders image",
        "content": "![Alt text](image.jpg)",
        "snapshotKey": "MDRenderer > Links and images > Images > renders image 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Blockquotes and horizontal rules > Blockquotes",
    "tests": [
      {
        "name": "renders blockquote",
        "content": "> This is a blockquote.",
        "snapshotKey": "MDRenderer > Blockquotes and horizontal rules > Blockquotes > renders blockquote 1"
      },
      {
        "name": "renders multi-line blockquote",
        "content": "> First line\n> Second line",
        "snapshotKey": "MDRenderer > Blockquotes and horizontal rules > Blockquotes > renders multi-line blockquote 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Blockquotes and horizontal rules > Horizontal rules",
    "tests": [
      {
        "name": "renders horizontal rule with dashes",
        "content": "---",
        "snapshotKey": "MDRenderer > Blockquotes and horizontal rules > Horizontal rules > renders horizontal rule with dashes 1"
      },
      {
        "name": "renders horizontal rule with asterisks",
        "content": "***",
        "snapshotKey": "MDRenderer > Blockquotes and horizontal rules > Horizontal rules > renders horizontal rule with asterisks 1"
      },
      {
        "name": "renders horizontal rule with underscores",
        "content": "___",
        "snapshotKey": "MDRenderer > Blockquotes and horizontal rules > Horizontal rules > renders horizontal rule with underscores 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Tables",
    "tests": [
      {
        "name": "renders simple table",
        "content": "| Name | Age |\n|------|-----|\n| John | 30  |\n| Jane | 25  |",
        "snapshotKey": "MDRenderer > Tables > renders simple table 1"
      },
      {
        "name": "renders table with alignment",
        "content": "| Name | Age |\n|------|-----|\n| John | 30  |\n| Jane | 25  |",
        "snapshotKey": "MDRenderer > Tables > renders table with alignment 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Special syntax > Escapes",
    "tests": [
      {
        "name": "handles backslash escapes",
        "content": "\\\\*not italic\\\\*",
        "snapshotKey": "MDRenderer > Special syntax > Escapes > handles backslash escapes 1"
      },
      {
        "name": "handles escaped characters",
        "content": "\\\\# Not a header",
        "snapshotKey": "MDRenderer > Special syntax > Escapes > handles escaped characters 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Special syntax > HTML entities",
    "tests": [
      {
        "name": "handles HTML entities",
        "content": "&amp; &lt; &gt;",
        "snapshotKey": "MDRenderer > Special syntax > HTML entities > handles HTML entities 1"
      },
      {
        "name": "handles special entities",
        "content": "&copy; &trade;",
        "snapshotKey": "MDRenderer > Special syntax > HTML entities > handles special entities 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Special syntax > Line breaks",
    "tests": [
      {
        "name": "handles soft line breaks",
        "content": "Line one\nLine two",
        "snapshotKey": "MDRenderer > Special syntax > Line breaks > handles soft line breaks 1"
      },
      {
        "name": "handles hard line breaks",
        "content": "Line one  \nLine two",
        "snapshotKey": "MDRenderer > Special syntax > Line breaks > handles hard line breaks 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Nested and complex scenarios > Nested emphasis",
    "tests": [
      {
        "name": "renders bold within italic",
        "content": "*This is italic with **bold** inside*",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Nested emphasis > renders bold within italic 1"
      },
      {
        "name": "renders italic within bold",
        "content": "**This is bold with *italic* inside**",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Nested emphasis > renders italic within bold 1"
      },
      {
        "name": "renders strikethrough with nested emphasis",
        "content": "~~This is deleted with **bold** and *italic* text~~",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Nested emphasis > renders strikethrough with nested emphasis 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Nested and complex scenarios > Links and images in various contexts",
    "tests": [
      {
        "name": "renders images within links",
        "content": "[![Alt text](image.jpg)](https://example.com)",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Links and images in various contexts > renders images within links 1"
      },
      {
        "name": "renders code within links",
        "content": "[Check out ",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Links and images in various contexts > renders code within links 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Nested and complex scenarios > Code in various contexts",
    "tests": [
      {
        "name": "renders code blocks in blockquotes",
        "content": "> Here",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Code in various contexts > renders code blocks in blockquotes 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Nested and complex scenarios > Blockquotes",
    "tests": [
      {
        "name": "renders nested blockquotes",
        "content": "> Here",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Blockquotes > renders nested blockquotes 1"
      },
      {
        "name": "renders blockquotes with emphasis and links",
        "content": "> Here",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Blockquotes > renders blockquotes with emphasis and links 1"
      },
      {
        "name": "renders blockquotes with lists",
        "content": "> Here",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Blockquotes > renders blockquotes with lists 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Nested and complex scenarios > Tables with complex content",
    "tests": [
      {
        "name": "renders standalone table correctly",
        "content": "> Here",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Tables with complex content > renders standalone table correctly 1"
      },
      {
        "name": "renders tables with emphasis and links",
        "content": "> Here",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Tables with complex content > renders tables with emphasis and links 1"
      },
      {
        "name": "renders tables with images",
        "content": "> Here",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Tables with complex content > renders tables with images 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Nested and complex scenarios > Mixed content scenarios",
    "tests": [
      {
        "name": "renders complex document with all features",
        "content": "> Here",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Mixed content scenarios > renders complex document with all features 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Nested and complex scenarios > Edge cases and malformed content",
    "tests": [
      {
        "name": "handles unbalanced emphasis markers",
        "content": "This has **unbalanced bold and *mixed emphasis**",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Edge cases and malformed content > handles unbalanced emphasis markers 1"
      },
      {
        "name": "handles consecutive same emphasis types correctly",
        "content": "**This is** nested **bold**",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Edge cases and malformed content > handles consecutive same emphasis types correctly 1"
      },
      {
        "name": "handles consecutive italic emphasis correctly",
        "content": "*This is* nested *italic*",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Edge cases and malformed content > handles consecutive italic emphasis correctly 1"
      },
      {
        "name": "handles triple asterisk emphasis correctly",
        "content": "***This is*** nested ***bold italic***",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Edge cases and malformed content > handles triple asterisk emphasis correctly 1"
      },
      {
        "name": "handles proper separated emphasis correctly",
        "content": "**this** is **bold**",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Edge cases and malformed content > handles proper separated emphasis correctly 1"
      },
      {
        "name": "handles links without URLs",
        "content": "[Link text]()",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Edge cases and malformed content > handles links without URLs 1"
      },
      {
        "name": "handles images without src",
        "content": "![Alt text]()",
        "snapshotKey": "MDRenderer > Nested and complex scenarios > Edge cases and malformed content > handles images without src 1"
      }
    ]
  },
  {
    "category": "MDRenderer > Custom renderers",
    "tests": [
      {
        "name": "allows custom paragraph renderer",
        "content": "Test paragraph",
        "snapshotKey": "MDRenderer > Custom renderers > allows custom paragraph renderer 1"
      },
      {
        "name": "falls back to default renderer when custom not provided",
        "content": "# Header",
        "snapshotKey": "MDRenderer > Custom renderers > falls back to default renderer when custom not provided 1"
      },
      {
        "name": "allows custom emphasis renderer",
        "content": "This is *custom italic* text",
        "snapshotKey": "MDRenderer > Custom renderers > allows custom emphasis renderer 1"
      },
      {
        "name": "allows custom link renderer with additional attributes",
        "content": "[Original Link](https://example.com)",
        "snapshotKey": "MDRenderer > Custom renderers > allows custom link renderer with additional attributes 1"
      },
      {
        "name": "allows chaining of custom renderers",
        "content": "**Bold** and *italic* text",
        "snapshotKey": "MDRenderer > Custom renderers > allows chaining of custom renderers 1"
      }
    ]
  }
]
