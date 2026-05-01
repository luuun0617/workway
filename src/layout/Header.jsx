import '../assets/scss/layout/_header.scss';

import logo from "../assets/images/logo.svg"
import LoginBtn from '../btn/LoginBtn';
import Login from './Login';
import Register from './Register';
// import { LoginBtn } from "../btn/LoginBtn";
function Header() {
    return(<>
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom py-4 px-3 py-lg-3 px-lg-0">
      <div class="container">
        <a class="navbar-brand" href="index.html"><img src={logo} alt="logo" /></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item me-3">
              <a class="nav-link active" aria-current="page" href="plan.html">服務方案</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link active" aria-current="page" href="about.html">關於職旅</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link active" aria-current="page" href="contact.html">聯絡我們</a>
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