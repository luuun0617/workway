import '../assets/scss/layout/_header.scss';
import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.svg"
import LoginBtn from '../btn/LoginBtn';
import Login from './Login';
import Register from './Register';
// import { LoginBtn } from "../btn/LoginBtn";
function Header() {
    return(<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom py-4 px-3 py-lg-3 px-lg-0">
      <div className="container">
        <NavLink className='nav-link ' to='/'><img src={logo} alt="logo" /></NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <NavLink className='nav-link' to='/Plan'>服務方案</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className='nav-link' to='/About'>關於職旅</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className='nav-link' to='/Contact'>聯絡我們</NavLink>
            </li>
          </ul>
        </div>
        
        {/* Button */}
        <LoginBtn />
        {/* Modal */}
        <Login />
        {/* 註冊 */}
        <Register />
      </div>
    </nav>
    </>
    )
}

export default Header