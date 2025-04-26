import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-100 md:py-4 py-0">
            <nav className="container mx-auto flex justify-between items-center px-4 fixed md:relative z-50 bg-gray-100 shadow-md md:shadow-none py-4">
                {/* Logo */}
                <a href="/" className="flex-shrink-0">
                    <img src={Logo} alt="Logo de Little Lemon" className="h-12" />
                </a>

                <button
                    onClick={toggleMenu}
                    className="text-2xl md:hidden focus:outline-none"
                >
                    ☰
                </button>

                <section
                    className={`${
                        isMenuOpen ? 'fixed' : 'hidden'
                    } top-0 left-0 w-full h-full z-50 bg-white flex flex-col items-center justify-center md:bg-transparent md:static md:flex md:flex-row md:items-center md:justify-end md:gap-6`}
                >
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-3xl focus:outline-none md:hidden"
                    >
                        ✖
                    </button>

                    <ul className="list-none space-y-6 md:space-y-0 md:flex md:gap-6">
                        <li><a href="#" className="text-gray-800 hover:text-gray-600 text-xl md:text-xl">Home</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600 text-xl md:text-xl">About</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600 text-xl md:text-xl">Menu</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600 text-xl md:text-xl">Reservations</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600 text-xl md:text-xl">Order Online</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600 text-xl md:text-xl">Login</a></li>
                    </ul>
                </section>
            </nav>
        </header>
    );
};

export default Nav;