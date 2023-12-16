import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <>
            <Header />
            <main className='w-full bg-gray-200 py-5'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;
