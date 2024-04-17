import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items= useSelector((state)=>state.cart);
  return (
    <div className='flex justify-between bg-slate-300 p-3'>
      
        <h1>REDUX STORE</h1>
  

      <div className='  flex gap-10 mr-5'>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <span>Cart items: {items.length} </span>
      </div>

    </div>
  )
}

export default Navbar