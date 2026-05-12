import { NavLink } from "react-router-dom";
export default function Link({ register , errors}) {
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
            source:"曾參加職旅活動 / 工作坊"
        },
        {
            id:"source-9",
            source:"職涯顧問介紹"
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
                        defaultValue={item.channel}
                        defaultChecked={i === 0}
                        {...register("contactMethod", { 
                            required: "請選擇一種聯絡方式" 
                        })}
                      />
                      <label 
                        className="form-check-label" 
                        htmlFor={item.id}>{item.channel}
                      </label>
                    </div>
                ))
            }
            {errors.contactMethod && <div className="text-danger fs-by-sm mt-1">{errors.contactMethod.message}</div>}
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
                        defaultValue={item.time}
                        {...register("time",{
                            required: "建議您可以勾選 2 個時段以上",
                            validate: (val) => val.length >= 2 || "建議您可以勾選 2 個時段以上"
                        })}
                    />
                      <label className="form-check-label" htmlFor={item.id}>{item.time}</label>
                    </div>
                ))
            }
            {errors.time && <span className="text-danger ps-2">{errors?.time?.message}</span>}
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
            {...register("reserve")}
           />
          <label htmlFor="reserve">預約諮詢日期</label>
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
                        defaultValue={item.source}
                        {...register("referralSource", {
                          required: "請至少選擇一個選項",
                          validate: (val) => val.length <= 3 || "最多勾選 3 個"
                        })}
                      />
                      <label className="form-check-label" htmlFor={item.id}>{item.source}</label>
                    </div>
                ))
            }
            {errors.referralSource && <div className="text-danger px-lg-2 fs-by-sm">{errors.referralSource.message}</div>}
          </div>
          <p className="text-warn px-lg-2">最多勾選 3 個</p>
        </div>
        <div className="mb-lg-5 mb-4">
          <div className="form-floating">
            <textarea className="form-control" 
                placeholder="otherComment" 
                id="otherComment" 
                style={{height: "160px"}}
                {...register("otherComment", {
                  maxLength: { value: 300, message: "最多 300 字" }
                })}
            >
            </textarea>
            <label htmlFor="year-career-goal">有什麼其他想告訴我們的事情嗎？（最多300字）</label>
          </div>
          {errors.otherComment && <span className="text-danger fs-by-sm">{errors.otherComment.message}</span>}
        </div>
        <div className="d-flex flex-column px-lg-2 px-1">
          <div className="form-check form-check-inline me-5 mb-2">
            <input 
                className="form-check-input"
                type="checkbox" 
                id="isGetInfo" 
                {...register("isGetInfo")}
             />
            <label className="form-check-label fs-by-sm" htmlFor="isGetInfo">我願意接收職旅最新資訊和專業內容</label>
          </div>
          <div className="form-check form-check-inline">
            <input 
                className="form-check-input"
                type="checkbox" 
                id="isAgreeTerm" 
                {...register("isAgreeTerm", { 
                    required: "必須同意服務條款才能送出" 
                })}
            />
            <label className="form-check-label fs-by-sm" htmlFor="isAgreeTerm">我同意
                <NavLink className='text-primary' to='/Terms'>服務條款</NavLink>
                和<NavLink className='text-primary' to='/Privacy'>隱私政策</NavLink>
            </label>
          </div>
          {errors.isAgreeTerm && <span className="text-danger fs-by-sm">{errors.isAgreeTerm.message}</span>}
        </div>
      </div>
    </div>

    </>)
}