import React from 'react'
import { useCard } from '../state/useCard'

function Inc() {
    const {inc} = useCard();
  return (
    <div>
      <button onClick={()=>{inc()}}>inc</button>
    </div>
  )
}

export default Inc
