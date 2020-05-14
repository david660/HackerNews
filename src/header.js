import React from "react"

function Header() {
  return (
    <div className="header">
      <Logo/>
      <ul className="links">
        <Links/>
      </ul>
    </div>
  )
}

function Logo() {
  return (
    <div className="logo">
      <h3>Hacker News</h3>
    </div>
  )
}

function Links(prop) {
  const newLink=[...linkList];
  let newLinkList=newLink.map(link=>(
    <li className="link">{link}</li>
  ));
  return (
    newLinkList
  )
}

const linkList=["new", "thread", "comments", "show", "ask", "jobs", "submit"];


export default Header;