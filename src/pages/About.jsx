import '../assets/scss/pages/_about.scss'

import bannerBgPc from "../assets/images/banner-bg-pc.png"
import bannerBg from "../assets/images/banner-bg.png"
import bannerPerson from "../assets/images/banner-person.svg"
import promise from "../assets/images/promise.svg"
import textPc from "../assets/images/text-mb.svg"
import textMb from "../assets/images/text-mb.svg"


import PartnerCard from '../card/PartnerCard'
import Map from './Map'
import Inform from './Inform';



export default function About() {
    return(
        <main>
          <section>
            <div className="about-banner position-relative">
                <img src={bannerBgPc} alt="banner-bg" className="about-img img-fluid d-none d-lg-block" />
                <img src={bannerBg} alt="banner" className="img-fluid d-lg-none d-lg-block banner-bg" />
                <div className="plan-title position-absolute top-50 start-50 translate-middle text-center">
                  <h2 className="fs-5xl mb-lg-6 mb-5">關於職旅</h2>
                  <p className="fs-by-lg text-natural-50 text-center">
                    職旅 WorkWay 匯集了來自不同領域、擁有豐富實戰經驗的自由工作者與數位遊牧專家。根據你的需求和階段，我們提供一對一諮詢。
                  </p>
                  <p className="fs-by-lg text-natural-50 text-center">無論你是剛開始探索期，還是已在轉型路上遇到瓶頸，我們都能提供適合你的專業指導。</p>
                </div>
                <div className="position-absolute banner-girl d-none d-lg-block">
                  <img src={bannerPerson} alt="banner-person" />
                </div>
            </div> 
          </section>
          <section className="container" aria-labelledby="partner-heading">
            <div className="row justify-content-center py-lg-7 py-6 px-3 px-lg-0">
              <div className="text-center mb-lg-6 mb-5">
                <h2 className="fs-4xl mb-lg-5 mb-4">精實的職旅夥伴</h2>
                <p className="fs-by-lg text-natural-50">我們相信，最好的指導來自於那些已經走過你想走的路，並願意伸出手拉你一把的人。</p>
              </div>
              {/* 職旅夥伴 */}
              <PartnerCard />
              {/* 團隊承諾 */}
              <section data-aos="fade-down">
                <div className="container">
                  <div className="mx-auto">
                    <article className="card-team shadow">
                      <div className="card-team-body mx-auto">
                        <div className="text-center mb-lg-6 mb-5">
                          <img src={promise} alt="promise" className="mb-lg-5 mb-4" />
                          <p className="fs-by-md text-white">我們不只是顧問，更是你職業轉型路上的夥伴與同行者。我們深知轉型過程中的不確定與恐懼，也經歷過停滯不前的困境。正因如此，我們更懂得如何陪你走過這段旅程，不只指引方向，更與你並肩同行。</p>
                        </div>
                        <img src={textPc} alt="text" className="d-none d-lg-block" />
                        <img src={textMb} alt="text-mb" className="d-block d-lg-none img-fluid" />
                      </div>
                    </article>
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* map */}
          <Map />
          {/* 聯絡方式 */}
          <div className="pb-40 px-3 px-lg-0">
            <Inform />
          </div>
        </main>
    )
}