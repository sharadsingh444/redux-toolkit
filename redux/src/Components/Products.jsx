import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import {STATUSES} from '../store/productSlice'

const Products = () => {
    const dispatch= useDispatch();
    const {data : products, status} = useSelector((state) => state.product);
   //  const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
       
        // const fetchProducts = async () => {
        //     const res = await fetch("https://fakestoreapi.com/products")
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);

        // }
        // fetchProducts();

    }, []);
    const handleAction = (product) =>{
        dispatch(add(product));

    };

    if(status === STATUSES.LOADING){
        return <h2>Loading...</h2>

        
    }
    if(status === STATUSES.ERROR)
    {
        return <h2>Something went wrong!</h2>
    }

    return (
        <div className=' flex flex-wrap  '>
            {
                products.map((product) => (
                    <div className='flex flex-col justify-center items-center w-[250px] h-[300px] m-2 bg-white p-1 border rounded-md '>
                        <img className='w-[100px] h-[100px] my-3 ' src={product.image} alt=''/>
                        <h4 className='font-bold m-2 flex justify-center items-center'>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button className='bg-violet-800 border rounded-md p-1 my-3' onClick={()=>handleAction(product)}>Add to cart</button>
                        
                    </div>

                ))
            }
        </div>
    )
}

export default Products