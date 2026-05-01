import '../assets/scss/pages/_index.scss'
import '../assets/utils/_typography.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import why from "../assets/images/why.svg"
import PicStart from './PicStart';
import Story from './Story';
import FrontCard from './FrontCard';
import Partner from './Partner';
import Process from './Process';
import QA from './QA';
import Inform from './Inform';

function FrontPage() {
    
    useEffect(()=>{
      AOS.init({
        duration: 900,
        once: false,
      });
    },[])
    return (<>
    <div className="py-lg-7 py-6 px-lg-0 px-3 gradient-ball">
      <div className="container">
        {/* 文字+按鈕 */}
        <div className="mb-40">  
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="px-lg-3">
                <h2 className="fs-display text-center m-0">一起陪伴、探索</h2>
                <h2 className="fs-display text-center m-0 mb-5">還有你那些未完成的夢</h2>
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-lg-between">
                  <p className="text-natural-50 text-center text-lg-start fs-body-lg mb-4 mb-lg-0">
                    自由工作很美，也很難。<br />我們用 1 對 1 陪伴，陪你從第一步開始，直到夢想變成日常
                  </p>
                  {/* 按鈕 */}
                  <a href="#" className="btn btn-secondary btn-start fs-2xl">
                    開始你的職旅
                    <span className="material-icons-outlined fs-3 align-bottom">keyboard_arrow_right</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 照片 */}
      <PicStart />
      {/* story */}
      <Story />
      <div className="bg-natural-95">
        {/* why */}
        <div className="container py-lg-7 py-6">
          <div className="container">
            {/* 圖示 */}
            <div className="text-center mb-lg-6 mb-5">
              <img
                src={why}
                alt="why"
                className="d-inline-block mb-1"
                style={{width: "160px", height: "auto"}}
              />
              <h2 className="fs-5xl">選擇職旅 WorkWay</h2>
            </div>
            <FrontCard />
            <div className="col mx-3 d-flex align-items-center">
              <p className="fs-by-md text-nowrap text-natural-50 me-lg-6 m4-4">
                不是套模板的建議，而是為你量身打造的陪伴！
              </p>
              <div
                className="flex-grow-1 border-top border-natural"
                style={{height: "1px"}}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* 遇見你的職涯夥伴 */}
      <Partner />
      {/* 服務流程 */}
      <Process />
      {/* 你可能有些困惑 */}
      <QA />
      {/* 聯絡方式 */}
      <Inform />
    </div>
    </>)
}

export default FrontPage