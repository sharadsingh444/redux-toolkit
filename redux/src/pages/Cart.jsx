import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleRemove =(productId)=>{
    dispatch(remove(productId));
  }
  return (
    <div >
      <h3> Cart</h3>
      <div className='flex flex-wrap'>
        {
          products.map((product) => (
            <div key={product.id} className='w-[250px] h-[300px] border bg-white rounded-md p-2  flex flex-col items-center justify-center m-2'>
              <img  className='w-[100px] h-[125px]' src={product.image} alt="" />
              <h5 className='p-2 '>{product.title}</h5>
              <h5 className='m-2'>{product.price}</h5>
              <button className='bg-gray-500 m-1' onClick={()=> handleRemove(product.id)}>Remove</button>
            </div>
          ))

        }
      </div>

    </div>
  )
}

export default Cart