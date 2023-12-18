import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='w-full bg-gray-800 py-5'>
            <div className='container'>
                <div>
                    <Link className='text-white text-3xl font-medium leading-normal' to='/'>35-MAKTAB</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
