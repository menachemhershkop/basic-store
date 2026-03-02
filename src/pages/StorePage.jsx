import React from 'react'
import Card from '../cumponents/Card'
import product from '../data/products.json'
import Description from '../cumponents/Description';
import { useCard } from '../state/useCard';
import Inc from '../cumponents/inc';

function StorePage() {
  
  
  return (
    <div>
      <Description note={"Exercise idea"} title={"Use global state to keep the cart in sync everywhere"} desc={"The products come from a JSON file, and both the shop page and the cart page read the same Zustand store."}/>
    <div className='cards'>
     {product.map((prod)=>{
      return (
<Card name={prod.name} price={prod.price} category={prod.category} description={prod.description} image={prod.image}/>
    )}) }</div>
    
    <Inc/>
    </div>
  )
}

export default StorePage
