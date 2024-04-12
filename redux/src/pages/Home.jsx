import React, { useEffect, useState } from 'react'
import Products from '../Components/Products';

const Home = () => {
   

  return (
    <div className='w-[100%] h-[100vh]  flex flex-col items-center'>
        <h2 className=' font-bold '> Welcom to the Redux Toolkit store</h2>
        <section>
            <h3>Products</h3>
            <Products />
        </section>
    </div>
  )
}

export default Home;