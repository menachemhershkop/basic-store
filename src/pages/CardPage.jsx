import React, { useState } from 'react'
import Description from '../cumponents/Description'
import { useMoney } from '../state/useMoney'
import { useCard } from '../state/useCard'
import BuyCard from '../cumponents/BuyCard'
import { useProduct } from '../state/useProduct'
import { useBuy } from '../state/useBuy'

function CardPage() {
  const buyList = useBuy((state)=> state.buyList)
  const [stock, setStock] = useState(false)
  const {gelt, addGelt, removeGelt, reset} = useMoney()
  const {items} = useCard()
  console.log(buyList.length);
  

 
  
  return (
    <div>
       <Description note={"Cart route"} title={"Your shopping cart"} desc={"This page reads the same global state as the product cards, so changes from one route are visible in the other route immediately."}/>
       <section className='main-cart'>
       {buyList.length===0&& <div className='empty'><h3>Your cart is empty</h3> <p>Add products from the shop page to see Zustand update this route.</p></div>}
       <div className='summary'>
        <h3>Order summary</h3>
       
       <p>total items : {buyList.length}</p>
       <p>total price: {gelt}</p>
       {/* <button onClick={()=>addGelt(30)}>add gelt</button>
       <button onClick={()=>removeGelt(12)}>remove</button> */}
       <button className='add' onClick={()=>reset()}>clear cart</button></div>
       {buyList.map((prod)=>{
        return(
         <BuyCard category={prod.category} name={prod.name} description={prod.description} price={prod.price}/>
       )})
      
       }</section>
    </div>
  )
}

export default CardPage
