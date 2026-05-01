
import advVectors from '../assets/images/adv-vectors.svg'
import advOne from '../assets/images/adv-1.png'
import advTwo from '../assets/images/adv-2.png'
import advThree from '../assets/images/adv-3.png'


export default function FrontCard() {
    const card = [
        {
            imgUrl: advOne,
            context: '我們的顧問都是親身走過這條路的專家，不是紙上談兵的理論家。你所學到的每一個建議，都是經過無數次嘗試與錯誤後萃取的精華。',
            title: '實戰經驗',
            icon:'ads_click'
        },
        {
            imgUrl: advTwo,
            context: '顧問會在每個關卡提供可執行的指引與回饋，確保你一路走得穩、走得對。',
            title: '全方位支持',
            icon: 'radio_button_checked'
        },
        {
            imgUrl: advThree,
            context: '與同路人交流、互相打氣與分享資源，讓你的轉型不再孤軍奮戰。',
            title: '社群力量',
            icon:'group'
        },
    ]
    return(<>
        <div className="d-flex flex-lg-row flex-column">
          {card.map((item, i) => (
            <div className="col col-lg-4 mx-3 mb-4 position-relative" key={i}>
              {i === 2 && (
                <img
                  src={advVectors}
                  alt="男孩貼紙"
                  className="why-sticker d-none d-lg-block"
                  style={{ position: 'absolute', zIndex: 1 }}
                />
              )}

              <article className="why-card position-relative overflow-hidden rounded-4 shadow-sm card-hover">
                <div style={{ height: "316px", overflow: "hidden" }}>
                  <img
                    src={item.imgUrl}
                    className="w-100 h-100 object-fit-cover"
                    alt={item.title}
                  />
                </div>

                <div className="why-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center p-5">
                  <p className="mb-0 text-white fs-by-md">
                    {item.context}
                  </p>
                </div>
                <span className="why-badge">
                  <span className="material-icons-outlined text-primary me-2">{item.icon}</span>
                  <span className="fs-2xl text-natural-50">{item.title}</span>
                </span>
              </article>
            </div>
          ))}
        </div>
  
    </>)
}