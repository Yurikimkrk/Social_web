import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from "./redux/state";


let renderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

renderTree()

store.subscribe(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
