import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex space-x-3 '>
        <span className=''>REDUX STORE</span>
        <div className=' flex space-x-2'>
            <Link to="/"></Link>
            <Link to="/cart">Cart</Link>
            <span>Cart items: 0</span>
        </div>
        
    </div>
  )
}

export default Navbar