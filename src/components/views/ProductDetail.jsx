import React from 'react';
import ProductCard from '../atoms/ProductCard';
import UseFetch from '../../configuration/service/UseFetch';

const ProductDetail = () => {
    const url = 'http://127.0.0.1:8000/api/products/';
    const { data } = UseFetch(url);

    if (!data || !data.data) {
        return <>Loading</>;
    }

    const products = data.data;

    return (
        <div>
            {products.map((element) => (
                <ProductCard
                    key={element.id}
                    imageValue={element.image_url}
                    nameValue={element.name}
                    descriptionValue={element.description}
                />
            ))}
        </div>
    );
};

export default ProductDetail;
