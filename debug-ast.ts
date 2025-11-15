import { parser as markdownParser, Strikethrough, Table } from '@lezer/markdown'
import type { SyntaxNode, TreeCursor } from '@lezer/common'

// Configure parser with extensions
const parser = markdownParser.configure([Table, Strikethrough])

function printTree(node: SyntaxNode, input: string, indent = 0): void {
  const spaces = ' '.repeat(indent * 2)
  const content = input.slice(node.from, node.to)
  const escapedContent = content.replace(/\n/g, '\\n').replace(/\t/g, '\\t')
  
  console.log(`${spaces}${node.name} [${node.from}-${node.to}]: "${escapedContent}"`)
  
  let child = node.firstChild
  while (child) {
    printTree(child, input, indent + 1)
    child = child.nextSibling
  }
}

function debugParse(markdown: string): void {
  console.log('='.repeat(80))
  console.log('Input:', JSON.stringify(markdown))
  console.log('='.repeat(80))
  
  const tree = parser.parse(markdown)
  printTree(tree.topNode, markdown)
  
  console.log('\n' + '='.repeat(80))
  console.log('Cursor-based traversal:')
  console.log('='.repeat(80))
  
  const cursor = tree.cursor()
  do {
    const { from, to, name } = cursor
    const content = markdown.slice(from, to)
    const escapedContent = content.replace(/\n/g, '\\n').replace(/\t/g, '\\t')
    const depth = cursor.depth
    const spaces = ' '.repeat(depth * 2)
    
    console.log(`${spaces}${name} [${from}-${to}]: "${escapedContent}"`)
  } while (cursor.next())
}

// Test cases
const testCases = [
  '**This is **nested** bold**',
  '**Simple bold**',
  '*This is *nested* italic*',
  '**Bold with *italic* inside**',
  '***Bold and italic***',
  '**Bold** and *italic* text',
  '**First bold** **Second bold**',
]

console.log('Debugging AST for problematic markdown cases\n')

testCases.forEach((testCase) => {
  debugParse(testCase)
  console.log('\n')
})