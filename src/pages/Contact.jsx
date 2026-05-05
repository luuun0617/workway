import '../assets/scss/pages/_contact.scss'

import formTop from "../assets/images/form-top.svg"
import Basic from './Basic'
import Requirement from './Requirement'
import Link from './Link'
import Refill from '../btn/Refill'

export default function Contact() {
    
    return(<>
    <main className="py-lg-7 py-6 bg-gray">
      <div className="container px-3 px-lg-0">
        <div className="text-center mb-lg-6 mb-5">
          <h2 className="fs-4xl mb-lg-5 mb-4">聯絡我們</h2>
          <p className="fs-by-lg text-natural-50">每一封郵件，我們都會親自回覆。每一通電話，都是新可能的開始。</p>
        </div>
        <div className="contact-card p-lg-6 p-5 shadow">
          <img src={formTop} alt="form-top" className="form-top d-none d-lg-block" />
          {/* 基本資料 */}
          <Basic />

          {/* 諮詢需求 */}
          <Requirement />

          {/* 聯絡偏好 */}
          <Link />
          {/* btn */}
          <div className="d-flex flex-lg-row flex-column justify-content-center">
            <Refill />
            <button type="button" className="btn btn-dark button-update">
              確認送出
              <span className="material-icons-outlined align-bottom ms-1">keyboard_arrow_right</span>
            </button>
          </div>
        </div>
      </div>
    </main>
    </>)
}