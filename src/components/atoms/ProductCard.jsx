import React from 'react'
const ProductCard = ({ name, description, image, onClick }) => {
  return (
    <div className="ml-10 card card-compact w-72 bg-white">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="productName font-black text-brown-letter">{name}</h2>
        <p className="text-brown-letter">{description}</p>

        <div className="card-actions justify-end">
          <button
            className="border-none btn bg-granate hover:bg-red-900 text-white font-bold"
            onClick={onClick}
          >
            Saber más
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;