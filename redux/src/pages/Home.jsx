import React, { useEffect, useState } from 'react'
import Products from '../Components/Products';

const Home = () => {
   

  return (
    <div className='w-[100%] h-[100vh]  flex flex-col  bg-slate-100 '>
        <h2 className=' font-bold mb-5'> Welcom to the Redux Toolkit store</h2>
        <section>
            <h3 className='mb-2'>Products</h3>
            <Products />
        </section>
    </div>
  )
}

export default Home;