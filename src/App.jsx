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
        {/* <Routes>
          <Route path='/workway/' element={<FrontPage />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Plan' element={<Plan />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes> */}
        <Outlet />
        <Footer />
      </div>
      {/* <FrontPage /> */}
    </>
  )
}

export default App
