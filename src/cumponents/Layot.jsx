import React from 'react'
import { Link } from 'react-router'
import { useCard } from '../state/useCard'
import { useBuy } from '../state/useBuy'

function Layot({children}) {
  const {items} = useCard()
  const buyList = useBuy((state)=> state.buyList)
  return (
    <div>
      <nav className='navbar'>
       <h1>Starter Store</h1>
       <div>
        <button className='home'><Link to='/'>Home</Link></button>
       <button className='cart'> <Link to='/cart'>Cart <div className='items'>{buyList.length}</div></Link></button>
        </div>
      </nav>

      <main className='container'>{children}</main>
    </div>
  )
}

export default Layot
