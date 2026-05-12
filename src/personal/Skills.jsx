export default function Skills({ register, errors }) {
  const specializations = [
    "設計/創意", 
    "科技/程式開發", 
    "行銷/公關", 
    "內容創作/寫作", 
    "顧問/諮詢",
    "商業/管理", 
    "財務/會計", 
    "教育/培訓", 
    "法律/合規", 
    "健康/醫療"
  ];

  const textFields = [
    { 
        id: "professional-background", 
        label: "專業背景和核心競爭力（最多300字）", 
        name: "background" 
    },
    { 
        id: "professional-ability", 
        label: "專業技能（最多300字）", 
        name: "skills" 
    },
    { 
        id: "language", 
        label: "語文能力（最多300字）", 
        name: "languages" 
    },
    { 
        id: "certificate", 
        label: "資格證照（最多300字）", 
        name: "certificates" 
    }
  ];

  return (
    <>
      <div className="d-flex gap-4 border-bottom pb-6 mb-6">
        {/* 左側標題 */}
        <div className="flex-shrink-0 side-width">
          <h2 className="fs-4 mb-3">專業技能區塊</h2>
          <p className="text-natural-60">欄位皆為選填</p>
        </div>

        {/* 右側內容 */}
        <div className="flex-grow-1">
          {/* 專業領域 */}
          <div className="mb-5">
            <p className="mb-2">核心專業領域</p>
            <div className="px-2">
              {specializations.map((item, index) => (
                <div className="form-check form-check-inline me-4 mb-2" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`proficiency-${index}`}
                    value={item}
                    {...register("coreSpecialties")}
                  />
                  <label className="form-check-label" htmlFor={`proficiency-${index}`}>
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* 專業區 */}
          {textFields.map((field) => {
            const isInvalid = !!errors[field.name];
            
            return (
              <div className="mb-5" key={field.id}>
                <div className="form-floating">
                  <textarea
                    className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
                    placeholder={field.label}
                    id={field.id}
                    style={{ height: "160px" }}
                    {...register(field.name, {
                      maxLength: { value: 300, message: "最多輸入 300 字" }
                    })}
                  ></textarea>
                  <label htmlFor={field.id}>{field.label}</label>
                  
                  {isInvalid && (
                    <div className="invalid-feedback">
                      {errors[field.name]?.message}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}