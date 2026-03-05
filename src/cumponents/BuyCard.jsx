import React from 'react'
import { useMoney } from '../state/useMoney'
import { useBuy } from '../state/useBuy'

function BuyCard(props) {
      const {removeGelt} = useMoney()
      const removeprod = useBuy((state)=>state.removeProd)
  return (
    <div className='product-content'>
      <p className='category'>{props.category}</p>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>${props.price}</p>
      <button onClick={()=>{removeGelt(props.price) , removeprod(props.name)}}>Remove from cart</button>
    </div>
  )
}

export default BuyCard
