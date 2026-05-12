import WorkDropdown from "../../btn/WorkDropdown"

export default function Basic({ register, setValue, errors , resetKey }) {
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
    ];
    
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
              {...register((item.id),{
                required:{
                  value:true,
                  message:`${item.label}為必填`
                }
              })}
            />
            <label htmlFor={item.id}>{item.label}</label>
            {item.hint && (
              <p className="text-warn px-2 mt-1">{item.hint}</p>
            )}
            {errors[item.id] && <span className="text-danger ps-2">此欄位必填</span>}
          </div>
        ))}
        <WorkDropdown 
          key={resetKey} 
          onSelect={(val) => setValue("workType", val)} />
      </div>
    </div>
    </>)
}