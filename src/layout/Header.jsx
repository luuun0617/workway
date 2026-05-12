import '../assets/scss/layout/_header.scss';
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

import logo from "../assets/images/logo.svg"
import LoginBtn from '../btn/LoginBtn';
import Login from './Login';
import Register from './Register';
import UserBtn from '../btn/UserBtn';

function Header() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(el => el.remove());
  }, [location.pathname]);

  const [isLogin, setIsLogin] = useState(()=>{
    const token = localStorage.getItem("workway_token");
    return !!(token && token !== "undefined" && token !== "null");
  });
  

  const navLinks = [
    { to: "/Plan", label: "服務方案" },
    { to: "/About", label: "關於職旅" },
    { to: "/Contact", label: "聯絡我們" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom py-4 px-3 py-lg-3 px-lg-0">
        <div className="container">
          <NavLink className='nav-link' to='/'><img src={logo} alt="logo" /></NavLink>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {navLinks.map((link) => (
                <li className="nav-item me-3" key={link.to}>
                  <NavLink className='nav-link' to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {isLogin ? (
            <UserBtn setIsLogin={setIsLogin} />
          ) : (
            <LoginBtn />
          )}

          <Login setIsLogin={setIsLogin} />

          {/* Register */}
          <Register setIsLogin={setIsLogin} />
        </div>
      </nav>
    </>
  );
}

export default Header;