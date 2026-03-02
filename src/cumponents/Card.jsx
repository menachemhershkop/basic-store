import React, { useState } from 'react'
import { useCard } from '../state/useCard';
import { useMoney } from '../state/useMoney';

function Card(props) {
  const [add, setAdd] = useState(true)
  const {inc, dec} = useCard();
  const {addGelt, removeGelt} = useMoney()
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
      {add && <button className='add' onClick={()=>(setAdd(false), inc(), addGelt(props.price))}>Add to cart</button>}
      {!add && <button className='remove' onClick={()=>(setAdd(true), dec(), removeGelt(props.price))}>Remove from cart</button>}
      </div>
    </div>
  )
}

export default Card
