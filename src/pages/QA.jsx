import qaImg from "../assets/images/QA.svg"
import qaPeople from "../assets/images/qa-people.svg"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
export default function QA() {
    const data =[
        {
            number:'collapseOne',
            title:'一對一諮詢是怎麼進行的？需要準備什麼嗎？',
            answer:'諮詢通常採 Google Meet 或 Zoom，時長約 30 分鐘。我們建議你在預約前先簡單整理目前的狀態、遇到的困難、或想達成的目標。如果你不確定，顧問也會從對話中引導你探索，無需擔心準備不夠。'
        },
        {
            number:'collapseTwo',
            title:'自由職涯真的可以養活自己嗎？你們怎麼協助？',
            answer:'自由職涯可以養活自己，但需要有策略與持續調整。WorkWay 顧問會根據你的專業、興趣、可投入時間，設計客製化的變現路徑，例如自由接案、產品化服務、遠端職位申請等，同時協助你管理初期財務風險，避免因壓力過大中途放棄。'
        },
        {
            number:'collapseThree',
            title:'職旅 WorkWay 的收費方式是怎麼計算的？',
            answer:'我們提供單次諮詢、短期方案（例如 3 次輔導包）、或專案長期陪跑計畫。每種方案都標示清楚金額與包含內容，無強制綁約或推銷額外商品。選擇前，我們也會依照你的需求與預算一起討論最適合的安排。'
        },
        {
            number:'collapseFour',
            title:'如果諮詢後發現不適合，會有退款保障嗎？',
            answer:'WorkWay 對每一位學員負責。如果你在第一次完整諮詢結束後，覺得方向不符合期待，可在 3 日內申請退款。我們也提供一次更換顧問的機會，確保你找到最適合自己的陪伴者。'
        },
        {
            number:'collapseFive',
            title:'我現在還不確定自己要什麼，也可以預約諮詢嗎？',
            answer:'很多人來找 WorkWay 時，其實也處於迷惘期。我們的一對一諮詢設計，就是從理解你的人生目標、價值觀與現實條件開始，逐步協助你釐清想要的生活方式與可能路徑。你不需要有答案，只需要願意開始對話。'
        }
    ]
    return(<>
    <div className="bg-grid">
      <div className="container py-lg-7 py-6">
        <div className="row justify-content-center align-items-end">
          <div className="text-center">
            <img
              src={qaImg}
              alt="QA"
              className="d-inline-block mb-1"
            />
          </div>
          <h2 className="fs-5xl text-center mb-5 mb-lg-6">
            你可能有些困惑...
          </h2>
          <div className="col-lg-5 d-none d-lg-block" data-aos="zoom-in-right">
            <img
              src={qaPeople}
              alt="qa-people"
            />
          </div>
          <div className="d-grid col-lg-7 col-12 px-3">
            <div className="accordion" id="QA">
                {
                    data.map((item, i)=>(
                        <div className="accordion-item" key={item.number}>
                          <h2 className="accordion-header">
                            <button
                              className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${item.number}`}
                              aria-expanded={i === 0 ? "true" : "false"}
                              aria-controls={item.number}
                            >
                              <span className="fs-xl text-natural-50 me-2 mb-4 mb-lg-0">Q.</span>
                              <span className="fs-lg text-natural-50 me-2 me-lg-0">{item.title}</span>
                            </button>
                          </h2>
                          <div
                            id={item.number}
                            className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                            data-bs-parent="#QA"
                          >
                            <div className="accordion-body">
                              <div className="d-flex flex-row">
                                <span className="text-primary fs-xl me-2">A.</span>
                                <span className="fs-by-sm">{item.answer}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                    ))
                }
            </div>
          </div>
        </div>
      </div>
    </div>
    </>)
}