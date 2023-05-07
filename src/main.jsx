import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <Helmet>
          <title>Dragon News</title>
          <link rel="icon" type="image/svg+xml" href="/public/icon.jpg" />
        </Helmet>
          <RouterProvider router={router}></RouterProvider>
       
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
