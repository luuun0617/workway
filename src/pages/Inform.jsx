export default function Inform() {
    return(<>
    <div className="container pt-40">
      <div className="row" data-aos="zoom-in-right">
        <div className="bg-contact rounded-4 px-4 py-5 px-lg-6 py-lg-5">
          <img
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/c07852c7f1c21031d6380bb4398e2163f71122c9/2025-week6/logo-icon-w.svg"
            alt="logo"
            className="icon-w mb-5"
          />
          <div>
            <h2 className="fs-4xl text-white mb-3">邁向你真正想過的生活，從這裡開始</h2>
            <p className="fs-by-lg text-white pb-5 mb-4 
              mb-lg-5 border-dashed"
            >
              第一次諮詢只要 30 分鐘，可能改變你未來 30 年的生活方式
            </p>
          </div>
          <div className="d-flex flex-lg-row flex-column">
            <div className="text-white me-lg-5 mb-4 mb-lg-0">
              <a
                className="d-flex align-items-center flex-lg-nowrap"
                href="#"
              >
                <span className="me-2 material-icons-outlined text-white">call</span>
                <p className="fs-xl text-white">0800-123-123</p>
              </a>
            </div>
            <div className="text-white mb-5 mb-lg-0">
              <a
                className="d-flex align-items-center"
                href="#"
              >
                <span className="me-2 material-icons-outlined text-white">mail</span>
                <p className="fs-xl mb-0 text-white">Sample@mail.com</p>
              </a>
            </div>
            <div className="ms-lg-auto">
              <button type="button" className="btn btn-dark btn-about">
                <a href="contact.html" className="me-1 fs-by-md text-white">預約免費職涯探索</a>
                <span className="material-icons-outlined align-bottom">keyboard_arrow_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>)
}