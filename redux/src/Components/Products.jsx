import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            console.log(data);
            setProducts(data);

        }
        fetchProducts();

    }, []);
    return (
        <div className=' flex flex-wrap  '>
            {
                products.map((product) => (
                    <div className='flex flex-col justify-center items-center w-[250px] h-[300px] m-2 bg-white p-1 border rounded-md '>
                        <img className='w-[100px] h-[100px] my-3 ' src={product.image} alt=''/>
                        <h4 className='font-bold m-2 flex justify-center items-center'>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button className='bg-violet-800 border rounded-md p-1 my-3'>Add to cart</button>
                        
                    </div>

                ))
            }
        </div>
    )
}

export default Products