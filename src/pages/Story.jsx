import storyCover1 from '../assets/images/story-cover-1.png'
import storyCover2 from '../assets/images/story-cover-2.png'
import storyCover3 from '../assets/images/story-cover-3.png'
import logoIcon from "../assets/images/logo-icon.svg"


export default function Story() {
    const workers = [
        {
            seniority:'數位遊牧 2 年',
            imageUrl: {storyCover1},
            title: '轉型成功的設計師',
            content:'從企業設計師轉職自由接案，比我想的難太多。收入不穩時我幾乎想放棄，是職旅顧問幫我找回方向與差異化。半年後，我不僅維持收入，還能自由挑案，最重要的是，我終於有時間陪爸媽。',
            work:'視覺設計師',
            name:'郭敏迪 (34y)'
        },
        {
            seniority:'數位遊牧 2 年',
            imageUrl: {storyCover2},
            title: '數位遊牧生活實踐者',
            content:'從企業設計師轉職自由接案，比我想的難太多。收入不穩時我幾乎想放棄，是職旅顧問幫我找回方向與差異化。半年後，我不僅維持收入，還能自由挑案，最重要的是，我終於有時間陪爸媽。',
            work:'內容策略師',
            name:'林雨潔 (29y)'
        },
        {
            seniority:'數位遊牧 3 年',
            imageUrl: {storyCover3},
            title: '中年轉型的工程師',
            content:'59 歲被裁員時，我以為職涯結束了。職旅顧問不只幫我轉職，更讓我相信自己還有價值。現在我每月穩定接案、收入翻倍。年齡不是限制，只是我還沒找到對的方向。',
            work:'系統架構顧問',
            name:'張世明 (62y)'
        }
    ];
    return(<>
    <div className="py-lg-7 py-6 position-relative">
        <div className="bg-story"></div>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center">
            {/* <!-- 左 --> */}
            <div className="col-lg-4 mb-lg-0 mb-5">
              <img
                src={logoIcon}
                alt="logo"
                className="logo-img"
              />
              <h2 className="py-4 py-lg-5 fs-5xl">他們已經踏上職旅<br />聽聽他們的故事</h2> 
              <p className="fs-by-md text-natural-50">
                每一段職涯轉型都有獨特挑戰，這些曾經與你有相同疑惑的夥伴，現在正過著他們嚮往的生活
              </p>
            </div>
            {/* <!-- 右 --> */}
            <div className="col-lg-8 col-12 p-lg-3 p-0" data-aos="fade-right">
              <div className="card-group d-flex flex-nowrap overflow-auto story-card">
                {
                    workers.map((item, i) =>(
                        <div className="card story-col shadow m-3 
                            position-relative rounded-4" key={i}>
                            <span
                              className="position-absolute custom-badage px-4 py-2 
                              rounded-1 bg-primary-60 fs-by-md text-white 
                              top-0 start-0 mt-3 ms-3">
                              {item.seniority}
                            </span>
                            <img
                              src={item.imageUrl}
                              className="rounded-top-4"
                              alt={item.work}
                             />
                            <div className="card-body">
                              <h3 className="fs-2xl mb-4 fw-bold">{item.title}</h3>
                              <p className="card-text text-natural-50 
                                fs-by-sm mb-4 text-truncate-multi"
                              >
                                {item.content}
                              </p>
                              <div className="name d-flex align-items-center">
                                <h4 className="fs-by-md mb-0">{item.work}<span className="mx-2 border-end"></span></h4>

                                <p className="fs-by-sm">{item.name}</p>
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