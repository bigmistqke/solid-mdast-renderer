import type { extensions, mdastExtensions } from "./extensions"

export interface TestCase {
  input: string
  output: string
  manual?: true
  extensions?: Array<keyof typeof extensions>
  mdastExtensions?: Array<keyof typeof mdastExtensions>
}

export type Spec = Record<string, TestCase>
