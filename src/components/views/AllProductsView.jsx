import React from 'react';
import ProductCard from '../atoms/ProductCard';
import UseFetch from '../../configuration/service/UseFetch';
import Navbar from '../molecules/Navbar';
import Footer from '../molecules/Footer';

const AllProductsView = () => {
    const url = 'http://127.0.0.1:8000/api/products/';
    const { data } = UseFetch(url);

    if (!data || !data.data) {
        return <>Loading</>;
    }

    const products = data.data;

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='ml-16 mt-24'>
                <h1 className='text-brown-letter font-bold text-4xl m-auto'>Nuestros productos</h1>
            </div>

            <div className='container flex flex-wrap ml-10 mt-10 p-4'>
                {products.map((element) => (
                    <div key={element.id} className='mb-8 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 '>
                        <ProductCard
                            id={element.id}
                            imageValue={element.image_url}
                            nameValue={element.name}
                            descriptionValue={element.description}
                        />
                    </div>
                ))}
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default AllProductsView;
