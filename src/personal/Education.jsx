export default function Education({ register, errors }) {
  const educationFields = [
    {
      id: "educational",
      label: "學歷背景（最多500字）",
      name: "educationHistory",
      maxLength: 500
    },
    {
      id: "intern",
      label: "專業培訓與工作坊（最多500字）",
      name: "trainingAndWorkshops",
      maxLength: 500
    }
  ];

  return (
    <>
      <div className="d-flex gap-4 pb-6">
        {/* 左側標題區 */}
        <div className="flex-shrink-0 side-width">
          <h2 className="fs-4 mb-3">教育背景</h2>
          <p className="text-natural-60">欄位皆為選填</p>
        </div>

        {/* 右側輸入區 */}
        <div className="text-width flex-grow-1">
          {educationFields.map((field, index) => {
            const isInvalid = !!errors[field.name];
            return (
              <div 
                className={index !== educationFields.length - 1 ? "mb-5" : ""} 
                key={field.id}
              >
                <div className="form-floating">
                  <textarea
                    className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
                    placeholder={field.label}
                    id={field.id}
                    style={{ height: "160px" }}
                    {...register(field.name, {
                      maxLength: {
                        value: field.maxLength,
                        message: `長度不能超過 ${field.maxLength} 個字`
                      }
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