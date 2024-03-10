import React from "react";
import Navbar from "../molecules/Navbar";
import AboutUs from "../molecules/AboutUs";
import Footer from "../molecules/Footer";
import ProductCard from '../atoms/ProductCard';
import Carousel from "../molecules/Carousel";
import UseFetch from '../../configuration/service/UseFetch';



const HomeView = () => {
  const url = 'http://127.0.0.1:8000/api/products/';
  const { data } = UseFetch(url);

  if (!data || !data.data) {
    return <>Loading</>;
  }

  const products = data.data;

  return (
    <>
    <div className="mx-auto">
      <div className="pb-10">
        <Navbar />
      </div>
      <div className="py-20">
        <Carousel />
      </div>
      
      <div className="ml-24">
  <div className="container flex flex-wrap">

    {products.map((element) => (
      <div key={element.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
        <ProductCard
         id={element.id}
          imageValue={element.image_url}
          nameValue={element.name}
          descriptionValue={element.description}
        />
      </div>
    ))}
  </div>
</div>
      <AboutUs />
      <Footer />
    </div>
    </>
  );
};

export default HomeView;
