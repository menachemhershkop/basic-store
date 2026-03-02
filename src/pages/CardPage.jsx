import React, { useState } from 'react'
import Description from '../cumponents/Description'

function CardPage() {
  const [items, setItems] = useState(false)
  return (
    <div>
       <Description note={"Cart route"} title={"Your shopping cart"} desc={"This page reads the same global state as the product cards, so changes from one route are visible in the other route immediately."}/>
       {!items&& <div className='empty'><h3>Your cart is empty</h3> <p>Add products from the shop page to see Zustand update this route.</p></div>}
    </div>
  )
}

export default CardPage
