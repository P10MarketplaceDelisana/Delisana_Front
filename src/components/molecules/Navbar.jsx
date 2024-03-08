import React, { useState, useEffect } from 'react';
import useFetch from '../../configuration/service/UseFetch';
import { API_URL } from '../../configuration/config';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSpecialsDropdownOpen, setIsSpecialsDropdownOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const { data: intolerancesData } = useFetch(`${API_URL}/intolerances`);
    const { data: productsData } = useFetch(`${API_URL}/categories`);

    useEffect(() => {
        if (productsData) {
            setCategories(productsData);
        }
    }, [productsData]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSpecialsDropdown = () => {
        setIsSpecialsDropdownOpen(!isSpecialsDropdownOpen);
    };

    return (
        <nav className="bg-orange-100 border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="public\images\logo.svg" className="h-12 w-auto" alt="Delisana Logo" />
                </a>
                <div className="flex md:order-2">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
      
      </button>
      <div className="relative hidden md:flex items-center mr-2">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-granate focus:border-granate dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Búsqueda..."/>
      </div>
      <div className="flex items-center">
        <svg className="w-6 h-6 text-brown-letter dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"/>
        </svg>
        <svg className="w-6 h-6 text-brown-letter dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
        </svg>
      </div>
    </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
        </div>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-orange-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-brown-letter bg-blue-700 rounded md:bg-transparent md:text-granate md:p-0 md:dark:text-brown-letter" aria-current="page">Inicio</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-brown-letter rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-granate md:p-0 md:dark:hover:text-granate dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Conócenos</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-brown-letter rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-granate md:p-0 dark:text-white md:dark:hover:text-granate dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dónde estamos</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-brown-letter rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-granate md:p-0 dark:text-white md:dark:hover:text-granate dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={toggleDropdown}>Productos</a>
                            {/* Dropdown */}
                            {isDropdownOpen && (
                                <div className="absolute mt-2 w-40 bg-orange-100 rounded shadow-lg">
                                    <ul className="py-2">
                                        {categories.map(category => (
                                            <li key={category.id}>
                                                <a href="#" className="block px-4 py-2 text-brown-letter hover:text-granate">{category.category}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-brown-letter rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-granate md:p-0 dark:text-white md:dark:hover:text-granate dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={toggleSpecialsDropdown}>Especiales</a>
                            {/* Dropdown */}
                            {isSpecialsDropdownOpen && (
                                <div className="absolute mt-2 w-40 bg-orange-100 rounded shadow-lg">
                                    <ul className="py-2">
                                        {intolerancesData && intolerancesData.map(intolerance => (
                                            <li key={intolerance.id}> <a href="#" className="block px-4 py-2 text-brown-letter hover:text-granate">{intolerance.intolerance}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

