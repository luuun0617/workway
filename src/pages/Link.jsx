export default function Link() {
    const channel = [
        { 
            id:"contact-1",
            channel:"信箱"
        },
        { 
            id:"contact-2",
            channel:"電話"
        },
        { 
            id:"contact-3",
            channel:"LINE"
        },
        { 
            id:"contact-4",
            channel:"Discord"
        }
    ]

    const time = [
        {
            id:"time-1",
            time:"平日上午(9:00-12:00)"
        },
        {
            id:"time-2",
            time:"平日下午(13:00-17:00)"
        },
        {
            id:"time-3",
            time:"平日晚上(18:00-21:00)"
        },
        {
            id:"time-4",
            time:"週末上午(9:00-12:00)"
        },
        {
            id:"time-5",
            time:"週末下午(13:00-17:00)"
        },
        {
            id:"time-6",
            time:"週末晚上(18:00-21:00)"
        },
        
    ]

    const source = [
        {
            id:"source-1",
            source:"Google 搜尋"
        },
        {
            id:"source-2",
            source:"Instagram"
        },
        {
            id:"source-3",
            source:"Facebook"
        },
        {
            id:"source-4",
            source:"Threads"
        },
        {
            id:"source-5",
            source:"YouTube"
        },
        {
            id:"source-6",
            source:"Podcast / 節目推薦"
        },
        {
            id:"source-7",
            source:"朋友或同事推薦"
        },
        {
            id:"source-8",
            source:"曾參加職旅活動 / 工作坊尋"
        },
        {
            id:"source-9",
            source:"職涯顧問介紹尋"
        },
        {
            id:"source-10",
            source:"其他（請填寫下題）"
        },
    ]
    return(<>
    <div className="d-flex flex-lg-row flex-column gap-4 pb-lg-6 pb-5 ">
      <div className="flex-shrink-0 side-width flex-lg-column d-flex justify-content-lg-start justify-content-between">
        <h2 className="fs-by-2xl mb-lg-3">聯絡偏好</h2>
        <p className="fs-by-md text-natural-60 py-1">欄位皆為選填</p>
      </div>
      <div className="w-100">
        <div className="mb-lg-5 mb-4">
          <p className="fs-by-md mb-2">偏好聯絡方式</p>
          <div className="px-lg-2">
            {
                channel.map((item,i)=>(
                    <div className="ms-lg-2 form-check form-check-inline me-lg-5 fs-by-sm" key={item.id}>
                      <input 
                      className="form-check-input" 
                      type="radio" 
                      name="channel" 
                      id={item.id} 
                      value={item.id}
                      defaultChecked={i === 0}
                      />
                      <label className="form-check-label" 
                      htmlFor={item.id}>{item.channel}</label>
                    </div>
                ))
            }
          </div>
        </div>
        <div className="mb-lg-5 mb-4">
          <p className="fs-by-md mb-2">偏好聯絡時段</p>
          <div className="px-2">
            {
                time.map((item)=>(
                    <div className="ms-lg-2 form-check form-check-inline fs-by-sm me-5 mb-2" key={item.id}>
                      <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id={item.id} 
                      value={item.id} />
                      <label className="form-check-label" htmlFor={item.id}>{item.time}</label>
                    </div>
                ))
            }
          </div>
          <p className="text-warn px-lg-4">建議您可以勾選 2 個時段以上</p>
        </div>
        <div className="form-floating mb-5">
          <input 
          type="date" 
          className="form-control" 
          id="reserve" 
          placeholder="reserve"
          name="reserve"
           />
          <label htmlFor="reserve">預約諮詢時間</label>
        </div>
        <div className="mb-lg-5 mb-4">
          <p className="fs-by-md mb-2">如何得知我們</p>
          <div className="d-flex flex-lg-row flex-wrap px-lg-2 px-1">
            {
                source.map((item)=>(
                    <div className="form-check form-check-inline fs-by-sm me-lg-5 me-4 mb-2" key={item.id}>
                      <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id={item.id} 
                      value={item.id} />
                      <label className="form-check-label" htmlFor={item.id}>{item.source}</label>
                    </div>
                ))
            }
          </div>
          <p className="text-warn px-lg-2">最多勾選 3 個</p>
        </div>
        <div className="mb-lg-5 mb-4">
          <div className="form-floating">
            <textarea className="form-control" 
                placeholder="other-comment" 
                id="other-comment" 
                style={{height: "160px"}}
                maxLength="300"
            >
            </textarea>
            <label htmlFor="year-career-goal">有什麼其他想告訴我們的事情嗎？（最多300字）</label>
          </div>
        </div>
        <div className="d-flex flex-column px-lg-2 px-1">
          <div className="form-check form-check-inline me-5 mb-2">
            <input 
            className="form-check-input"
            type="checkbox" 
            id="isGetInfo" 
            value="isGetInfo" />
            <label className="form-check-label fs-by-sm" htmlFor="isGetInfo">我願意接收職旅最新資訊和專業內容</label>
          </div>
          <div className="form-check form-check-inline">
            <input 
            className="form-check-input"
            type="checkbox" 
            id="isAgreeTerm" 
            value="isAgreeTerm" />
            <label className="form-check-label fs-by-sm" htmlFor="isAgreeTerm">我同意<a href="terms.html" className="text-primary">服務條款</a>和<a href="privacy.html" className="text-primary">隱私政策</a></label>
          </div>

        </div>
      </div>
    </div>

    </>)
}