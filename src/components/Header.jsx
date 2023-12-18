import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='w-full bg-gray-800 py-5'>
            <div className='flex justify-between items-center container'>
                <div>
                    <Link className='text-white text-2xl sm:text-3xl font-medium leading-normal' to='/'>35-MAKTAB</Link>
                </div>
                <nav className='hidden lg:block'>
                    <ul className='flex items-center text-white text-lg font-medium leading-normal space-x-5'>
                        <li>
                            <NavLink className='block hover:text-red-600 duration-150' to='/'>
                                Bosh sahifa
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='block hover:text-red-600 duration-150' to='/About'>
                                Maktab haqida
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='block hover:text-red-600 duration-150' to='/Event'>
                                Tadbirlar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='block hover:text-red-600 duration-150' to='/Contact'>
                                Aloqa
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='lg:hidden'>
                    <button
                        onClick={toggleMenu}
                        className='text-white text-2xl font-bold leading-normal focus:outline-none'
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>
            {/* RESPONSIVE MOBILE MENU */}
            {isOpen && (
                <nav className='lg:hidden pt-5 px-5'>
                    <ul className='text-white text-lg font-medium leading-normal space-y-5'>
                        <li>
                            <NavLink
                                onClick={toggleMenu}
                                className='block hover:text-red-600 duration-150'
                                to='/'
                            >
                                Bosh sahifa
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={toggleMenu}
                                className='block hover:text-red-600 duration-150'
                                to='/About'
                            >
                                Maktab haqida
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={toggleMenu}
                                className='block hover:text-red-600 duration-150'
                                to='/Event'
                            >
                                Tadbirlar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={toggleMenu}
                                className='block hover:text-red-600 duration-150'
                                to='/Contact'
                            >
                                Aloqa
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
