import React, { useState } from 'react'
import { useCard } from '../state/useCard';
import { useMoney } from '../state/useMoney';
import { useBuy } from '../state/useBuy';

function Card(props) {
  const [add, setAdd] = useState(true)
  const {inc, dec} = useCard();
  const {addGelt, removeGelt} = useMoney()
  const addprod = useBuy((state)=>state.addProd)
  const removeprod = useBuy((state)=>state.removeProd)
  const buyList = useBuy((state)=> state.buyList)
  console.log(buyList);
  
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
      {!props.boghut && <button className='add' onClick={()=>(setAdd(false), inc(), addGelt(props.price), addprod( {category:props.category, name:props.name, description:props.description, price:props.price}))}>Add to cart</button>}
      {props.boghut && <button className='remove' onClick={()=>(setAdd(true), dec(), removeGelt(props.price), removeprod(props.name))}>Remove from cart</button>}
      </div>
    </div>
  )
}

export default Card
