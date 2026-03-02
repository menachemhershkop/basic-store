import React, { useState } from 'react'
import Description from '../cumponents/Description'
import { useMoney } from '../state/useMoney'
import { useCard } from '../state/useCard'


function CardPage() {
  const [stock, setStock] = useState(false)
  const {gelt, addGelt, removeGelt, reset} = useMoney()
  const {items} = useCard()
  return (
    <div>
       <Description note={"Cart route"} title={"Your shopping cart"} desc={"This page reads the same global state as the product cards, so changes from one route are visible in the other route immediately."}/>
       <section className='main-cart'>
       {!stock&& <div className='empty'><h3>Your cart is empty</h3> <p>Add products from the shop page to see Zustand update this route.</p></div>}
       <div className='summary'>
        <h3>Order summary</h3>
       
       <p>total items : {items}</p>
       <p>total price: {gelt}</p>
       {/* <button onClick={()=>addGelt(30)}>add gelt</button>
       <button onClick={()=>removeGelt(12)}>remove</button> */}
       <button className='add' onClick={()=>reset()}>clear cart</button></div>
       </section>
    </div>
  )
}

export default CardPage
