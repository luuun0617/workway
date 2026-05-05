// import { useState } from 'react'
import './assets/all.scss'

import { Outlet } from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'

// const { VITE_APP_PATH } = import.meta.env;

function App() {

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
