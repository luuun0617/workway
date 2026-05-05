import InterestedBtn from "../btn/interestedBtn"


import planOne from "../assets/images/plan-1.svg"
import planTwo from "../assets/images/plan-2.svg"
import planThree from "../assets/images/plan-3.svg"
import stat from "../assets/images/stat.svg"

export default function PlanCard() {
    const data = [
        {
            imgUrl:planOne,
            type: '全面方案',
            title:'職涯轉型全程計畫',
            content:'針對希望完全改變職業領域的資深專業人士。我們的專家團隊將協助您將過往經驗轉化為新領域的競爭優勢。',
            list:{
                li1:'深度職能轉換評估與規劃',
                li2:'跨領域技能遷移策略',
                li3:'新領域人脈建立指導',
                li4:'長期職涯發展藍圖'
            },
            people:'從企業職場轉型為自由工作者 / 數位遊牧者的專業人士',
            price:'120,000'
        },
        {
            imgUrl:planTwo,
            type: '加速方案',
            title:'自由工作加速計畫',
            content:'為已確定要轉型但需要全面規劃的專業人士設計。六次深度諮詢，從心態調整到實際操作，全方位為您的轉型做好準備。',
            list:{
                li1:'詳細的市場機會分析',
                li2:'個人優勢定位與差異化策略',
                li3:'完整的轉型時間表與里程碑',
                li4:'轉型期間的心理健康維護策略'
            },
            people:'已經開始自由工作但想提升效能和收入的專業人士',
            price:'80,000'
        },
        {
            imgUrl:planThree,
            type: '遊牧方案',
            title:'數位遊牧生活計畫',
            content:'針對希望改變職業領域的資深專業人士。我們的專家團隊將協助您將過往經驗轉化為新領域的競爭優勢。',
            list:{
                li1:'深度職能轉換評估與規劃',
                li2:'跨領域技能遷移策略',
                li3:'新領域人脈建立指導',
                li4:'長期職涯發展藍圖'
            },
            people:'希望同時擁有工作自由和地域自由的專業人士',
            price:'60,000'
        },
        
    ]
    return(<>
    <div className="px-3">
      {
        data.map((item,i)=>(
            <article className="card-plan shadow rounded-3 mb-lg-5 mb-4" key={i}>
                <div className="fs-sm plan-badge">HOT</div>
                <div>
                    <div>
                        <p className="fs-by-md text-primary mb-2">{item.type}</p>
                        <h3 className="fs-2xl mb-2">{item.title}</h3>
                        <p className="fs-by-md mb-2">{item.content}</p>
                        <ul className="plan-ul mb-lg-5 mb-4">
                          <li className="mb-1">
                            <img className="align-bottom me-1" src={stat} alt="stat" aria-hidden="list" />
                            <span className="fs-by-md">{item.list.li1}</span>
                          </li>
                          <li className="mb-1">
                            <img className="align-bottom me-1" src={stat} alt="stat" aria-hidden="list" />
                            <span className="fs-by-md">{item.list.li2}</span>
                          </li>
                          <li className="mb-1">
                        <img className="align-bottom me-1" src={stat} alt="stat" aria-hidden="list" />
                        <span className="fs-by-md">{item.list.li3}</span>
                          </li>
                          <li className="mb-1">
                        <img className="align-bottom me-1" src={stat} alt="stat" aria-hidden="list" />
                        <span className="fs-by-md">{item.list.li4}</span>
                          </li>
                        </ul>
                    </div>
                    <div className="card-content-bg mb-lg-5 mb-4">
                        <div className="mb-2 d-flex align-items-center">
                          <span className="fs-by-md flex-shrink-0">適合對象：</span>
                          <span className="fs-md flex-fill">{item.people}</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="fs-by-md">優惠價格：</span>
                          <span className="fs-2xl text-primary">{`NT$ ${item.price}`}</span>
                        </div>
                    </div>
                    <InterestedBtn />
                </div>
                <div className="plan-1 ms-5 d-none d-lg-block">
                  <img src={item.imgUrl} alt="plan-1" />
                </div>
            </article>
        ))
      }
    </div>
    </>)
}