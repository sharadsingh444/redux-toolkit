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
        <div>
            {
                products.map((product) => (
                    <div>
                        <img src={product.image} alt=''/>
                        
                    </div>

                ))
            }
        </div>
    )
}

export default Products