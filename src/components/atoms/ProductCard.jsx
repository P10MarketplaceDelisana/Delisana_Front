import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ id, imageValue, nameValue, descriptionValue }) => {
  console.log(id);
  return (
    <div className="border border-amber-900 card card-compact w-72 h-96 bg-white flex-shrink-0 m-4">
      <figure>
        <img src={imageValue} alt={nameValue} />
      </figure>
      <div className="card-body ">
        <h2 className="productName font-black text-brown-letter">{nameValue}</h2>
        <p className="text-brown-letter">{descriptionValue}</p>
    <p>{id}</p>
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