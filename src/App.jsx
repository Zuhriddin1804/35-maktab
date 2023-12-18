import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Contact from './pages/Contact';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Event' element={<Event />} />
        <Route path='/Contact' element={<Contact />} />
      </Route>
    )
  );

  return (
    <div className='font-Montserrat'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
