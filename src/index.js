import React from "react"
import ReactDOM from "react-dom"
import Header from "./header.js"
import Body from "./body.js"
import "./index.css"

function App() {
  return(
    <div>
      <Header/>
      <Body/>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector("#root"))