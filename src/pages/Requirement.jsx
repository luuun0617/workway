export default function Requirement() {
    const career = [
        {
            id:"career-1",
            label:"職涯探索與方向"
        },
        {
            id:"career-2",
            label:"接案與技能變現"
        },
        {
            id:"career-3",
            label:"品牌與內容經營"
        },
        {
            id:"career-4",
            label:"遠端工作與數位游牧"
        },
        {
            id:"career-5",
            label:"收入與時間管理"
        },
        {
            id:"career-6",
            label:"其他（請填寫下題）"
        },
    ]

    const work = [
         "全職上班族" , 
         "兼職工作者" , 
         "自由工作者/接案者" , 
         "數位遊牧者" , 
         "創業者/企業主" , 
         "待業中" , 
         "其他"
    ]

    
    return (<>
    <div className="d-flex flex-lg-row flex-column gap-4 border-bottom pb-lg-6 pb-5 mb-lg-6 mb-lg-5 mb-4">
      <div className="flex-shrink-0 side-width flex-lg-column d-flex justify-content-lg-start justify-content-between">
        <h2 className="fs-by-2xl mb-lg-3">諮詢需求</h2>
        <p className="fs-by-md text-natural-60 py-1">欄位皆為
          <span className="badge rounded-pill text-bg-danger ms-1">必填</span>
        </p>
      </div>
      <div className="w-100">
        <div className="mb-lg-5 mb-4">
          <p className="fs-by-md mb-2">諮詢主題</p>
          <div className="d-flex flex-lg-row flex-wrap px-lg-2 px-1">
            {
                career.map((item)=>(
                    <div className="form-check form-check-inline fs-by-sm me-lg-5 me-4 mb-2" key={item.id}>
                      <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id={item.id} 
                      value={item.id} />
                      <label className="form-check-label" htmlFor={item.id}>{item.label}</label>
                    </div>
                ))
            }
          </div>
          <p className="text-warn px-lg-2">可複選，讓我們更了解你的狀況，安排最適合的顧問與建議。</p>
        </div>
        <div className="dropdown mb-lg-5 mb-4">
          <button className="form-select text-start py-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            期望諮詢的專家
          </button>
          <ul className="dropdown-menu w-100 mt-2">
              {work.map((work,i)=>(
                  <li key={i}>
                      <a className="dropdown-item" href="#">{work}</a>
                  </li>
              ))}
          </ul>
        </div>
        <div className="mb-lg-5 mb-4">
          <div className="form-floating">
            <textarea className="form-control" 
                placeholder="Leave a comment here" 
                id="year-career-goal" 
                style={{height: "160px"}}
                maxLength="300"
            >
            </textarea>
            <label htmlFor="year-career-goal">您目前面臨的主要挑戰</label>
          </div>
        </div>
        <div>
          <div className="form-floating">
            <textarea className="form-control" 
                placeholder="Leave a comment here" 
                id="years-career-goal" 
                style={{height: "160px"}}
                maxLength="300"
            >
            </textarea>
            <label htmlFor="years-career-goal">期望達成的目標</label>
          </div>
        </div>
      </div>
    </div>
    </>)
}