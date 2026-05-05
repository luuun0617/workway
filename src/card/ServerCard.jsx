import InterestedBtn from "../btn/interestedBtn"

import serverOne from '../assets/images/server-1.svg'
import serverTwo from '../assets/images/server-2.svg'
import serverThree from '../assets/images/server-3.svg'
export default function ServerCard() {
    const data = [
        {
            imgUrl:serverOne,
            title:'職涯探索評估',
            content:'3 次一對一諮詢，了解可能性和適配性',
            price:'3,800'
        },
        {
            imgUrl:serverTwo,
            title:'職涯轉型規劃',
            content:'6 次深度諮詢，建立完整轉型藍圖',
            price:'12,000'
        },
        {
            imgUrl:serverThree,
            title:'專業定位與品牌建立',
            content:'4 次專業諮詢，確立市場定位與差異化策略',
            price:'8,800'
        },
    ]
    return(<>
    <div className="d-flex flex-wrap flex-lg-nowrap mb-4 mb-lg-0">
        {
            data.map((item,i)=>(
                <article className="col-lg-4 col-12 card-server shadow rounded-3 mx-lg-3 mx-0 mb-4 mb-lg-0" key={i}>
                  <div className="fs-sm server-badge">HOT</div>
                  <img src={item.imgUrl} alt="server-1" className="mb-lg-5 mb-4 server-img" />
                  <div className="mb-lg-5 mb-4">
                    <h3 className="fs-2xl mb-2">{item.title}</h3>
                    <p className="fs-by-md mb-2">{item.content}</p>
                    <p className="fs-2xl text-primary">{`NT$ ${item.price}`}</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <InterestedBtn />
                  </div>
                </article>
            ))
        }
      </div>
    </>)
}