// import { useState } from 'react'
import './assets/all.scss'

import { Outlet } from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'
import { useEffect } from 'react';

function App() {


  useEffect(() => {
    const handleModalHide = () => {
      if (document.activeElement instanceof HTMLElement && 
          document.activeElement.closest('.modal')) {
        document.activeElement.blur();
      }
    };

    document.addEventListener('hide.bs.modal', handleModalHide);  
  
    return () => {
      document.removeEventListener('hide.bs.modal', handleModalHide);
    };
  }, []);

  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
