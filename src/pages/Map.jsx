import map from "../assets/images/map.png"
export default function Map() {
    const data =[
        {
            title:'公司位置',
            content:'110台北市信義區信義路五段7號'
        },
        {
            title:'負責人',
            content:'張世明'
        },
        {
            title:'聯絡專線',
            content:'02-2758-6600'
        },
        {
            title:'營業時間',
            content:'週一至週五 10:00～18:00（國定假日休息）'
        },
        {
            title:'電子郵件',
            content:'contact@workway.tw'
        },
        {
            title:'成立時間',
            content:'2023 年 6 月'
        },
        {
            title:'統一編號',
            content:'83149276'
        },
    ]
    return(<>
    <section className="info-section" aria-labelledby="coinfo-heading">
      <div className="info-bg"></div>
      <div className="row position-relative">
        <h2 className="text-center fs-4xl mb-lg-6 mb-5">公司資訊</h2>
      </div>
      <div className="container">
        <article className="card-info shadow rounded-3">
          <div className="mb-lg-6 mb-5">
            {
                data.map((item,i)=>(
                    <div className="border-bottom-info p-lg-5 p-3 w-100" key={i}>
                      <div className="d-flex">
                        <p className="fs-md text-natural-50 me-lg-5 me-4 w-66">{item.title}</p>
                        <p className="fs-md">{item.content}</p>
                      </div>
                    </div>
                ))
            }
          </div>
          <img src={map} alt="map" className="map-img" />
        </article>
      </div>
    </section>
    </>)
}