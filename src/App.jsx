import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
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
