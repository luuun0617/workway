function Register() {
    return(<>
    <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
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
                    <img src="/public/images/google.svg" alt="google-icon"/>
                  </span>
                  Google
                </button>
                <button className="btn btn-outline-natural-85 text-dark mb-5 py-3 fs-by-md" type="button">
                  <span className="align-bottom me-lg-1 me-0">
                    <img src="/public/images/discord.svg" alt="discord-icon" />
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
                    id="passwordInput"
                  />
                  <span
                    className="material-icons-outlined position-absolute 
                    top-50 end-0 translate-middle-y me-3"
                    style={{ cursor: 'pointer', fontSize: '20px' }}
                  >
                    visibility_off
                  </span>
                </div>
                <div className="form-check form-check-inline ms-2 mb-4">
                  <input 
                  className="form-check-input"
                  type="checkbox" 
                  id="isAgreeTerm" 
                  value="isAgreeTerm" />
                  <label className="form-check-label fs-by-sm" htmlFor="isAgreeTerm">我同意<a href="terms.html" className="text-primary">服務條款</a>和<a href="privacy.html" className="text-primary">隱私政策</a></label>
                </div>
                <button type="submit" className="btn btn-dark w-100 py-3 fs-by-md">
                  送出
                  <span className="material-icons-outlined align-bottom ms-lg-1 ms-0" style={{ fontSize: '20px' }}>chevron_right</span>
                </button>
              </form>
              <p className="text-center mt-lg-5 mt-0">
                已經是會員？
                <a className="d-inline-block text-primary text-decoration-none" href="#" data-bs-target="#loginModal" data-bs-toggle="modal">直接登入</a>
              </p>
            </div>  

            {/* 右邊 Banner 圖片 */}
            <div className="d-none d-lg-block">
              <img src="/public/images/register.png" alt="banner" className="rounded-end-3 login-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>)
}

export default Register