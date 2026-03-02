import React, { useState } from 'react'
import { useCard } from '../state/useCard';

function Card(props) {
  const [add, setAdd] = useState(true)
  const {inc, dec} = useCard();
  return (
    <div className='card'>
      <div className='image-product'>
      <h1>{props.image}</h1>
      </div>
      <div className='product-content'>
      <p className='category'>{props.category}</p>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>${props.price}</p>
      {add && <button onClick={()=>(setAdd(false), inc())}>Add to cart</button>}
      {!add && <button onClick={()=>(setAdd(true), dec())}>Remove from cart</button>}
      </div>
    </div>
  )
}

export default Card
