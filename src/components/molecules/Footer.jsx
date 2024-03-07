import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 rounded-lg shadow dark:bg-gray-900 fixed bottom-0 w-full">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Acerca de nosotros</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Política de privacidad</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licencias</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contacto</a>
          </li>
        </ul>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2024. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;




