// ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import UseFetch from '../../configuration/service/UseFetch';

const ProductDetail = () => {
  const { id } = useParams();
  const url = `http://127.0.0.1:8000/api/products/${id}`;
  const { data } = UseFetch(url);

  if (!data || !data.data) {
    return <>Loading</>;
  }

  const product = data.data;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* Otros detalles del producto */}
    </div>
  );
};

export default ProductDetail;
