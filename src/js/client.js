import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Discussion from './components/Discussion'
import store from './store' //tie react application to redux

//7) in client.js, import all components and render using ReactDOM
const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  <Discussion />
</Provider>, app);