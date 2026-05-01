import login from '../assets/images/login.png'
import google from '../assets/images/google.svg'
import discord from '../assets/images/discord.svg'
function Login() {
    return(<>
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-body d-flex">
            {/* 左邊 Banner 圖片 */}
            <div className="d-none d-lg-block">
              <img src={login} alt="banner" className="rounded-start-3 login-img" />
            </div>
            {/* 右邊登入區 */}
            <div className="modal-right px-4 py-6 position-relative"> 
                <div className="d-flex align-items-center mb-lg-6 mb-5">
                  <h3 className="fs-4xl mb-0 text-center flex-grow-1">登入</h3>
                </div>
                <button type="button" className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close"></button>
              {/* 快速登入 */}
                <div className="d-grid gap-4 border-bottom">
                    <button className="btn btn-outline btn-outline-natural-85 text-dark py-3 fs-by-md" type="button">
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
                    <input type="email" className="fs-by-md form-control mb-4 input-style" placeholder="帳號" />
                    <div className="position-relative mb-4">
                        <input
                          type="password"
                          className="fs-by-md form-control input-style"
                          placeholder="密碼"
                          id="passwordInput"
                        />
                        <span className="material-icons-outlined position-absolute 
                          top-50 end-0 translate-middle-y me-3"
                          style={{ cursor: 'pointer', fontSize: '20px' }}>
                            visibility_off
                        </span>
                    </div>
                    <p className="fs-by-sm text-natural-50 text-end mb-4">忘記密碼</p>
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
    </>)
}

export default Login