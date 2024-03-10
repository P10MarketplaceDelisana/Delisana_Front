import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, imageValue, nameValue, descriptionValue }) => {
  return (
    <div className="card card-compact border-red-900 border solid w-72 h-96 bg-white flex-shrink-0">
      <figure>
        <img src={imageValue} alt={nameValue} />
      </figure>
      <div className="card-body">
        <h2 className="productName font-black text-brown-letter">{nameValue}</h2>
        <p className="text-brown-letter">{descriptionValue}</p>
         <p className='text-transparent'>{id}</p>
        <div className="card-actions justify-end">
        <Link to={`/products/${id}`}>
            <button className="border-none btn bg-granate hover:bg-red-900 text-white font-bold">
              Saber más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;