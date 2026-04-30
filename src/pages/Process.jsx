export default function Process() {
    const steps = [
        {
            number:'1',
            imgUrl: '/images/step-1.svg',
            title: '免費註冊會員',
            content: '透過網站左上角按鈕，立即註冊免費會員，與我們開始建立連結。'
        },
        {
            number:'2',
            imgUrl: '/images/step-2.svg',
            title: '填寫職旅計劃',
            content: '了解你的技能、熱情與市場需求的交會點，找出屬於你的獨特定位。'
        },
        {
            number:'3',
            imgUrl: '/images/step-3.svg',
            title: '初次諮詢',
            content: '依據你的目標與現況，給予最直接的建議，建立清晰的轉型思路。'
        },
        {
            number:'4',
            imgUrl: '/images/step-4.svg',
            title: '實戰指導',
            content: '專家一對一指導，從品牌建立到客戶開發，每一步都有明確方向。'
        },
    ]
    return(<>
    <div class="bg-primary py-lg-7 py-6">
        <div class="container">
          <div class="text-center text-white mb-5 mb-lg-6">
            <h2 class="fs-5xl mb-lg-5 mb-4">服務流程</h2>
            <p class="fs-by-lg">簡單四步，踏上你的職旅</p>
          </div>
          <div class="d-flex flex-nowrap step-col">
            {
                steps.map((item , i)=>(<div class="col-12 col-lg-3 px-3" data-aos="zoom-in-right" key={i}>
                      <div
                        class="position-relative h-100 rounded-4 card-service 
                         align-items-center text-center px-4 px-lg-5"
                      >
                        <div class="text-primary service-badge">
                          <span class="fs-sm pt-lg-1 pt-0 me-1">STEP</span>
                          <span class="fs-lg">{item.number}</span>
                        </div>
                        <img
                          src={item.imgUrl}
                          alt="服務一"
                          class="w-75 object-fit-contain mb-4 mb-lg-5"
                        />
                        <h4 class="fs-2xl mb-4 mb-lg-5">{item.title}</h4>
                        <p class="fs-by-sm text-natural-50">
                          {item.content}
                        </p>
                      </div>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </>)
}