import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-slate-100 p-3'>
      
        <h1>REDUX STORE</h1>
  

      <div className=' bg-green-700 flex justify-end'>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <span>Cart items: 0</span>
      </div>

    </div>
  )
}

export default Navbar