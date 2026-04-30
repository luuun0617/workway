// import { useState } from 'react'
import './assets/all.scss'
import Header from './layout/Header'
import FrontPage from './pages/FrontPage'
import Footer from './layout/Footer'

// const { VITE_APP_PATH } = import.meta.env;
function App() {

  return (
    <>
      <Header />
      <FrontPage />
      <Footer />
    </>
  )
}

export default App
