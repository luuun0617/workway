import '../assets/scss/pages/_plan.scss'
import '../assets/utils/_colors.scss'


import bannerBgPc from "../assets/images/banner-bg-pc.png"
import bannerBg from "../assets/images/banner-bg.png"
import bannerPerson from "../assets/images/banner-person.svg"
import goal from "../assets/images/goal.svg"
import conversation from "../assets/images/conversation.svg"
import love from "../assets/images/love.svg"
import subscribeOne from "../assets/images/subscribe-1.svg"
import subscribeTwo from "../assets/images/subscribe-2.svg"
import subscribeThree from "../assets/images/subscribe-3.svg"

import PlanCard from "../card/PlanCard"
import ServerCard from '../card/ServerCard'
import InterestedBtn from "../btn/interestedBtn"
import Inform from './Inform';

export default function Plan() {
    return(
        <div>
            <section>
                <div className="plan-banner position-relative">
                  <img src={bannerBgPc} alt="banner-bg" className="img-fluid d-none d-lg-block" />
                  <img src={bannerBg} alt="banner" className="img-fluid d-lg-none d-lg-block banner-bg" />
                  <div className="plan-title position-absolute top-50 start-50 translate-middle text-center">
                    <h2 className="fs-5xl mb-lg-6 mb-5">服務方案</h2>
                    <p className="fs-by-lg text-natural-50 text-center">
                      我們最全面的服務方案，為您提供從評估、規劃到實踐的完整支持。不再擔心轉型過程中的各種挑戰，我們的專家團隊將全程陪伴，確保您順利實現職業自由。
                    </p>
                  </div>
                  <div className="position-absolute banner-person d-none d-lg-block">
                    <img src={bannerPerson} alt="banner-person" />
                  </div>
                </div>  
            </section>
            {/* 職涯轉型全程計畫 */}
            <section className="container" aria-labelledby="plant1-heading">
              <div className="row justify-content-center py-lg-7 py-6">
                <div className="text-center mb-lg-6 mb-5">
                  <img className="mb-1" src={goal} alt="goal" />
                  <h2 className="fs-4xl mb-lg-5 mb-4">職涯轉型全程計畫</h2>
                  <p className="fs-by-lg text-natural-50">從企業到自由，無縫轉型之旅</p>
                </div>
                {/* Plan card */}
                <PlanCard />
              </div>
            </section>
            {/* 基礎諮詢服務 */}
            <div className="server-bg">
              <section className="container" aria-labelledby="plant2-heading">
                <div className="row justify-content-center py-lg-7 py-6 px-3 px-lg-0">
                  <div className="text-center mb-lg-6 mb-5">
                    <img className="mb-1" src={conversation} alt="conversation" />
                    <h2 className="fs-4xl mb-lg-5 mb-4">基礎諮詢服務</h2>
                    <p className="fs-by-lg text-natural-50">我們提供第一次免費諮詢，一起建立信任的橋樑</p>
                  </div>            
                  <ServerCard />
                </div>
              </section> 
            </div>
            {/* 持續支持方案 */}
            <section className="sub-section">
              <div className="donate-bg"></div>
              <div className="row position-relative">
                <div className="text-center mb-lg-6 mb-5">
                  <img className="mb-1" src={love} alt="love" />
                  <h2 className="fs-4xl mb-lg-5 mb-4">持續支持方案</h2>
                </div>
              </div>
              <div className="container" data-aos="fade-up">
                <div className="col-lg-8 mx-auto">
                  <article className="card-subscribe shadow">
                    <div className="subscribe-deco">
                      <img src={subscribeThree} alt="subscribe-3" />
                    </div>
                    <div className="subscribe-left d-none d-lg-block">
                      <img src={subscribeOne} alt="subscribe-1" />
                    </div>
                    <div className="card-subscribe-body">
                      <div className="text-center mb-6">
                        <h3 className="fs-by-2xl mb-2">職旅會員計畫</h3>
                        <p className="fs-by-md">享有長期社群支持與資源服務</p>
                      </div>
                      <div className="d-flex mb-6">
                        <div className="align-items-center">
                          <span className="fs-2xl text-primary me-2">NT$ 9,800</span>
                          <span className="fs-by-md">/年</span>
                          <span className="fs-by-md">（NT$1,200 /月）</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <InterestedBtn />
                      </div>
                    </div>
                    <div className="subscribe-right d-none d-lg-block">
                      <img src={subscribeTwo} alt="subscribe-2" />
                    </div>
                  </article>
                </div>
              </div>
            </section>
            {/* 聯絡方式 */}
            <div className="pb-40 px-3 px-lg-0">
              <Inform />
            </div>
      </div>
    )
}