import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us-container text-brown-letter">
      <img
        src="\src\assets\images\cookies_bg.jpg"
        alt="sección1_cookies_img"
        className="section1_img hover:shadow-lg"
      />
      <div className="flex justify-center">
      <div className="max-w-4xl px-4 py-8 text-center">
      <h2 className="section-title  text-3xl font-bold mb-2">Conócenos</h2>
      <p className="section1-description mb-8">
        En Delisana, nacimos con la visión de transformar la experiencia de la
        repostería, y desde nuestro inicio en 2024, nos hemos dedicado a crear
        delicias que conquistan paladares y cuidan de tu bienestar...<br></br>
        <br />
        <span className="font-bold">Ingredientes Naturales: </span>
        Cada delicia es una promesa de calidad y autenticidad, elaborada con
        ingredientes naturales.<br></br>
        <span className="font-bold">Compromiso con la Frescura: </span>
        Nos asociamos con productores locales para garantizar frescura y
        transmitir la esencia de la tierra en cada creación. <br></br>
        <span className="font-bold">Sabor y Salud en Armonía: </span>
        Creemos que la repostería puede ser consciente. Cada producto cuenta la
        historia de nuestro compromiso con frescura, calidad y satisfacción.
        <br></br>
        <span className="font-bold">Alternativas para Intolerancias: </span>
        Alternativas para Intolerancias: Ofrecemos opciones para intolerancias
        alimenticias, como lactosa, fructosa o celiaquía. También disponemos de
        alternativas sin azúcares refinados para cuidar de la salud de todxs.<br></br><br></br>
      </p>

      <h2 className="section-second-title text-2xl font-bold mb-2">Únete a la Experiencia Delisana: </h2>
      <p className="Experience-description mb-8">
        Descubre una nueva dimensión de dulzura consciente, adaptada a tus
        necesidades. Sumérgete en nuestro universo de sabores saludables y
        disfruta de la magia de Delisana.<br></br>
      </p>
      <button className="button_view_products button_view_products bg-granate active:bg-granate-dark hover:bg-granate-light focus:outline-none focus:ring focus:ring-granate text-white px-4 py-2 mt-4 rounded-md transition duration-300 ease-in-out">
        Ver Productos
      </button>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
