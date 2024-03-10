import React from 'react';
import UseFetch from '../../configuration/service/UseFetch';
import { useParams } from 'react-router-dom';

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
    
    <div>
      <h2>{product.name}</h2>
      <img src={product.image_url} alt={product.name} />
      <p>{product.description}</p>
      {/* Agrega el resto de la presentación de detalles del producto */}
    </div>
  );
};

export default ProductDetail;





