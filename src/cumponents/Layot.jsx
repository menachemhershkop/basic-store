import React from 'react'
import { Link } from 'react-router'
import { useCard } from '../state/useCard'

function Layot({children}) {
  const {items} = useCard()
  return (
    <div>
      <nav className='navbar'>
       <h1>Starter Store</h1>
       <div>
        <button className='home'><Link to='/'>Home</Link></button>
       <button className='cart'> <Link to='/cart'>Cart <div className='items'>{items}</div></Link></button>
        </div>
      </nav>

      <main className='container'>{children}</main>
    </div>
  )
}

export default Layot
