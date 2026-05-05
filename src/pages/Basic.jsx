
export default function Basic() {
    const work = [
         "全職上班族" , 
         "兼職工作者" , 
         "自由工作者/接案者" , 
         "數位遊牧者" , 
         "創業者/企業主" , 
         "待業中" , 
         "其他"
    ]

    const data =[
        {
            id: "name",
            type: "text",
            label: "姓名",
            placeholder: "姓名",
            hint: null
        },
        {
            id: "email",
            type: "email",
            label: "信箱",
            placeholder: "name@example.com",
            hint: "盡量勿使用Yahoo或Hotmail郵件信箱，以免因擋信、漏信"
        },
        {
            id: "number",
            type: "tel",
            label: "聯絡電話",
            placeholder: "電話",
            hint: "我們不會以電話主動聯繫您，告知您要至ATM操作轉帳"
        },
    ]
    return(<>
    <div className="d-flex flex-lg-row flex-column gap-4 border-bottom pb-lg-6 pb-5 mb-lg-6 mb-lg-5 mb-4">
      <div className="side-width flex-shrink-0 flex-lg-column d-flex justify-content-lg-start justify-content-between">
        <h2 className="fs-by-2xl mb-lg-3">基本資料</h2>
        <p className="fs-by-md text-natural-60 py-1">欄位皆為
          <span className="badge rounded-pill text-bg-danger ms-1">必填</span>
        </p>
      </div>
      <div className="w-100">
        {data.map((item) => (
          <div className="form-floating mb-lg-5 mb-4" key={item.id}>
            <input
              type={item.type}
              className="form-control"
              id={item.id}
              placeholder={item.placeholder}
            />
            <label htmlFor={item.id}>{item.label}</label>

            {item.hint && (
              <p className="text-warn px-2 mt-1">{item.hint}</p>
            )}
          </div>
        ))}
        <div className="dropdown">
          <button className="form-select text-start py-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            目前職業/工作身分
          </button>
          <ul className="dropdown-menu w-100 mt-2">
              {work.map((work,i)=>(
                  <li key={i}>
                      <a className="dropdown-item" href="#">{work}</a>
                  </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
    </>)
}