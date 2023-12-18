import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='w-full bg-gray-800 py-5'>
            <div className='flex justify-between items-center container'>
                <div>
                    <Link className='text-white text-3xl font-medium leading-normal' to='/'>35-MAKTAB</Link>
                </div>
                <nav>
                    <ul className='flex items-center text-white text-lg font-medium leading-normal space-x-5 hover:text-red-600 duration-150'>
                        <li>
                            <NavLink to='/'>Bosh sahifa</NavLink>
                        </li>
                        <li>
                            <NavLink to='/About'>Maktab haqida</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Event'>Tadbirlar</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Contact'>Aloqa</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
