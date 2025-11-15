import type { Component } from 'solid-js'
import { MDRenderer } from '../src'

const App: Component = () => {
  // return <AutoTestViewer />
  return <MDRenderer content="# hallo world" />
}

export default App
