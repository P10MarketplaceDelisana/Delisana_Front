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
                    {/* Resto del código para búsqueda y otros iconos */}
                </div>
                {/* Elementos de navegación */}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    {/* Resto del código para búsqueda */}
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

