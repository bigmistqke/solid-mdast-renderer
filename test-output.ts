import { MDRenderer } from './src/index'
import { render } from '@solidjs/testing-library'

function renderComponent(content: string): string {
  const result = render(() => <MDRenderer content={content} />)
  return result.container.innerHTML
}

const testCases = [
  "**This is **nested** bold**",
  "*This is *nested* italic*",
  "***This is ***nested*** bold italic***",
  "**this** is **bold**"
]

testCases.forEach(testCase => {
  console.log('\nInput:', JSON.stringify(testCase))
  console.log('Output:', renderComponent(testCase))
})