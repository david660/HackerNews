import React from "react"
import OurList from "./ourList"

function Body() {
  return (
    <div className="container">
      <ListItem/>        
    </div>
  )
}

function ListItem() {
  const theItem=OurList.map(ourLi =>
  
  <div className="line">
    <List key={ourLi.id} id={ourLi.id} news={ourLi.news} source={ourLi.source} time={ourLi.time}/>
    <Other key={ourLi.points} time={ourLi.time} points={ourLi.points} comments={ourLi.comments}/>
  </div>
)

  return (
    <div>
      {theItem}
    </div>
  )
}

function List(props) {
  return (
    <div className="item">
      <div className="topic">
        <p className="number">{props.id}.&nbsp;&nbsp;</p>
        <h4>{props.news}&nbsp; &nbsp;</h4>
        <p className="grey">({props.source})</p>
      </div>
    </div>
  )
}


function Other(props) {
  console.log(props);
  return (
    <div className="others">
      <p>{props.points} by Muyi {props.time}&nbsp;|&nbsp;</p>
      <p>hide&nbsp;|&nbsp;</p>
      <p>flag&nbsp;|&nbsp;</p>
      <p>{props.comments}&nbsp;|&nbsp;</p>
      <p>Instapaper&nbsp;|&nbsp;</p>
      <p>Save to pocket&nbsp;</p>
    </div>
  )
}

export default Body