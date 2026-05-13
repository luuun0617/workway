import login from '../assets/images/login.png'
import google from '../assets/images/google.svg'
import discord from '../assets/images/discord.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const socialButtons = [
  { 
    src: google, 
    alt: 'google-icon', 
    label: 'Google', 
    extraClass: '' 
  },
  { 
    src: discord, 
    alt: 'discord-icon', 
    label: 'Discord', 
    extraClass: 'mb-5' 
  },
];

function Login({ setIsLogin }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_APP_PATH}/login`, loginData);
      localStorage.setItem('workway_token', data.accessToken);
      localStorage.setItem('user_info', JSON.stringify(data.user));

      window.bootstrap?.Modal.getInstance(document.getElementById('loginModal'))?.hide();
      setIsLogin(true);
      alert('登入成功！');
      navigate('/User');
    } catch (error) {
      alert(error.response?.data || '登入失敗，請檢查資料格式');
    }
  };

  return (
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-body d-flex">
            <div className="d-none d-lg-block">
              <img src={login} alt="banner" className="rounded-start-3 login-img" />
            </div>
            <div className="modal-right px-4 py-6 position-relative">
              <div className="d-flex align-items-center mb-lg-6 mb-5">
                <h3 className="fs-4xl mb-0 text-center flex-grow-1">登入</h3>
              </div>
              <button type="button" className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" />

              <div className="d-grid gap-4 border-bottom">
                {socialButtons.map(({ src, alt, label, extraClass }) => (
                  <button key={label} className={`btn btn-outline-natural-85 text-dark py-3 fs-by-md ${extraClass}`} type="button">
                    <span className="align-bottom me-lg-1 me-0">
                      <img src={src} alt={alt} />
                    </span>
                    {label}
                  </button>
                ))}
              </div>

              <form className="py-5" onSubmit={handleLogin}>
                <input
                  type="email" name="email"
                  className="fs-by-md form-control mb-4 input-style"
                  placeholder="帳號" value={loginData.email}
                  onChange={handleInput} required
                />
                <div className="position-relative mb-4">
                  <input
                    type="password" name="password"
                    className="fs-by-md form-control input-style"
                    placeholder="密碼" value={loginData.password}
                    onChange={handleInput} required
                  />
                  <span className="material-icons-outlined position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ cursor: 'pointer', fontSize: '20px' }}>
                    visibility_off
                  </span>
                </div>
                <p className="fs-by-sm text-natural-50 text-end mb-4" style={{ cursor: 'pointer' }}>忘記密碼</p>
                <button type="submit" className="btn btn-dark w-100 py-3 fs-by-md">
                  送出
                  <span className="material-icons-outlined align-bottom ms-lg-1 ms-0" style={{ fontSize: '20px' }}>keyboard_arrow_right</span>
                </button>
              </form>

              <p className="text-center mt-lg-5 mt-0">
                還不是會員？
                <a className="d-inline-block text-primary text-decoration-none" href="#" data-bs-target="#registerModal" data-bs-toggle="modal">快速註冊</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login