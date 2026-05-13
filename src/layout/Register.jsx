import google from '../assets/images/google.svg'
import discord from '../assets/images/discord.svg'
import register from '../assets/images/register.png'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Modal } from 'bootstrap';

const cleanupModal = () => {
  document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
};

function Register() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [registerData, setRegisterData] = useState({
      email: "",
      password: ""
    });
    
    const [ confirmPassword, setConfirmPassword ] = useState("");

    useEffect(() => {
      const modalElement = document.getElementById('registerModal');
      if (!modalElement) return;
      const handleHidden = () => {
        cleanupModal();
      };
      modalElement.addEventListener('hidden.bs.modal', handleHidden);
      return () => {
        modalElement.removeEventListener('hidden.bs.modal', handleHidden);
      };
    }, []);

    const handleInput = (e) => {
      const { name, value } = e.target;
      setRegisterData({
        ...registerData,
        [name]: value
      });
    };
    
    const handleSignUp = async (e) => {
      if (e) e.preventDefault();
      if (isLoading) return;

      if (registerData.password !== confirmPassword) {
        alert("密碼輸入不一致！");
        return;
      }
      setIsLoading(true);

      try {
        const response = await axios.post(`${import.meta.env.VITE_APP_PATH}/register`, {
          email: registerData.email,
          password: registerData.password
        });

        localStorage.setItem("workway_token", response.data.accessToken);

        const modalElement = document.getElementById('registerModal');
        let modalInstance = Modal.getInstance(modalElement);

        if (!modalInstance && modalElement) {
          modalInstance = new Modal(modalElement);
        }

        if (modalInstance) {
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }

          modalElement.addEventListener('hidden.bs.modal', () => {
            navigate('/Contact');
            setTimeout(() => alert("註冊成功！"), 100);
          }, { once: true });

          modalInstance.hide();

        } else {
          cleanupModal();
          navigate('/Contact');
        }
      } catch (error) {
        console.error("註冊失敗原因：", error.response?.data || error.message);
        alert(error.response?.data || "註冊失敗");
      } finally {
        setIsLoading(false);
      }
    };

    return(<>
    <div className="modal fade" 
      id="registerModal" tabIndex="-1" 
      aria-labelledby="registerModalLabel" 
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-body d-flex">

            {/* 左邊註冊區 */}
            <div className="modal-right px-4 py-6 position-relative"> 
              <div className="d-flex align-items-center mb-lg-6 mb-5">
                <h3 className="fs-4xl mb-0 text-center flex-grow-1">註冊</h3>
              </div>
              <button type="button" className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close"></button>
              {/* 快速登入 */}
              <div className="d-grid gap-4 border-bottom">
                <button className="btn btn-outline-natural-85 text-dark py-3 fs-by-md" type="button">
                  <span className="align-bottom me-lg-1 me-0">
                    <img src={google} alt="google-icon"/>
                  </span>
                  Google
                </button>
                <button className="btn btn-outline-natural-85 text-dark mb-5 py-3 fs-by-md" type="button">
                  <span className="align-bottom me-lg-1 me-0">
                    <img src={discord} alt="discord-icon" />
                  </span>
                  Discord
                </button>
              </div>
              <form className="py-5">
                <input 
                  type="email"
                  name="email"
                  className="fs-by-md form-control mb-4 input-style" 
                  placeholder="帳號" 
                  value={registerData.email}
                  onChange={handleInput}
                />
                <div className="position-relative mb-4">
                  <input
                    type="password"
                    name="password"
                    className="fs-by-md form-control input-style"
                    placeholder="密碼"
                    value={registerData.password}
                    onChange={handleInput}
                  />
                  <span
                    className="material-icons-outlined position-absolute 
                    top-50 end-0 translate-middle-y me-3"
                    style={{ cursor: 'pointer', fontSize: '20px' }}
                  >
                    visibility_off
                  </span>
                </div>
                <div className="position-relative mb-4">
                  <input
                    type="password"
                    className="fs-by-md form-control input-style"
                    placeholder="再次輸入密碼"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                  />
                  <span
                    className="material-icons-outlined position-absolute 
                    top-50 end-0 translate-middle-y me-3"
                    style={{ cursor: 'pointer', fontSize: '20px' }}
                  >
                    visibility_off
                  </span>
                  {confirmPassword && registerData.password !== confirmPassword && (
                    <div className="text-danger fs-by-sm mt-1">密碼不一致</div>
                  )}
                </div>
                <div className="form-check form-check-inline ms-2 mb-4">
                  <input 
                  className="form-check-input"
                  type="checkbox" 
                  id="isAgreeTerm" 
                  value="isAgreeTerm" />
                  <label className="form-check-label fs-by-sm" htmlFor="isAgreeTerm">我同意
                    <NavLink className='text-primary' to='/Terms'>服務條款</NavLink>
                    和<NavLink className='text-primary' to='/Privacy'>隱私政策</NavLink>
                  </label>
                </div>
                <button 
                  type="button" 
                  className="btn btn-dark w-100 py-3 fs-by-md" 
                  onClick={handleSignUp}
                  disabled={isLoading}
                >
                  {isLoading ? "處理中..." : "送出"}
                  {!isLoading && <span className="material-icons-outlined align-bottom ms-lg-1 ms-0" style={{ fontSize: '20px' }}>chevron_right</span>}
                </button>
              </form>
              <p className="text-center mt-lg-5 mt-0">
                已經是會員？
                <a 
                  className="d-inline-block text-primary text-decoration-none" 
                  href="#" 
                  data-bs-dismiss="modal"
                  data-bs-target="#loginModal" 
                  data-bs-toggle="modal"
                  onClick={() => {
                    if (document.activeElement instanceof HTMLElement) {
                      document.activeElement.blur();
                    }
                  }}
                >
                  直接登入
                </a>
              </p>
            </div>  

            {/* 右邊 Banner 圖片 */}
            <div className="d-none d-lg-block">
              <img src={register} alt="banner" className="rounded-end-3 login-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>)
}

export default Register