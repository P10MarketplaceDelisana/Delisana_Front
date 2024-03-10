import React from 'react';
import UseFetch from '../../configuration/service/UseFetch';
import { useParams } from 'react-router-dom';
import Footer from '../molecules/Footer';
import Navbar from '../molecules/Navbar';

const ProductDetail = () => {
    const { id } = useParams();
    const url = `http://127.0.0.1:8000/api/products/${id}`;
   
    const { data, isLoading, error } = UseFetch(url);
  
    if (isLoading) {
      return <>Loading...</>;
    }
  
    if (error || !data || !data.product) {
      console.log(data);
      return <>Error loading product details</>;
    }
  
    const product = data.product;
    console.log(product);
  
    return (
      <>
      <div>
        <Navbar />
      </div>
     
        <div className='ml-20 m-10'>
        <h1 className='text-brown-letter font-bold text-4xl my-24'>{product.name}</h1>
        </div>
        <div className='flex my-20'>
        <div className='mx-20 w-96 '>
        <img src={product.image_url} alt={product.name} />
        </div>
        <div>
        <p className='text-brown-letter w-96'>{product.description}</p>
        <h3 className='text-brown-letter text-xl my-4'>{product.price}€ </h3>
        <button className='mt-2 text-beige-bg bg-granate p-2 rounded w-max '>Añadir al carrito</button>
        </div>
        </div>
    

      <div>
        <Footer />
      </div>
      
      </>
    );
  };

export default ProductDetail;