import React from 'react'

function Description(props) {
  return (
    <div>
      <p>{props.note}</p>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

export default Description
