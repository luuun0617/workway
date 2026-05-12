export default function Project({ register, errors }) {
  const jobStatusList = [
    { 
        id: "job-fulltime", 
        value: "全職上班族" 
    },
    { 
        id: "job-partTime", 
        value: "兼職工作者" 
    },
    { 
        id: "job-freelancer", 
        value: "自由工作者/接案者" 
    },
    { 
        id: "job-digital", 
        value: "數位遊牧者" 
    },
    { 
        id: "job-founder", 
        value: "創業者/企業主" 
    },
    { 
        id: "job-unEmploy", 
        value: "待業中" 
    },
    { 
        id: "job-other", 
        value: "其他" 
    },
  ];

  const industryList = [
    "科技", 
    "媒體", 
    "教育", 
    "金融", 
    "醫療健康", 
    "零售製造", 
    "服務業", 
    "藝術創意", 
    "非營利組織"
  ];
  const seniorityList = [
    "1 年以下", 
    "1-3 年", 
    "3-5 年", 
    "5-10 年", 
    "10 年以上"
  ];
  const incomeList = [
    { 
        id: "inc-1", 
        label: "3 萬以下", 
        value: "under-30k" 
    },
    { 
        id: "inc-2", 
        label: "3-5 萬", 
        value: "30k-50k" 
    },
    { 
        id: "inc-3", 
        label: "5-8 萬", 
        value: "50k-80k" 
    },
    { 
        id: "inc-4", 
        label: "8-12 萬", 
        value: "80k-120k" 
    },
    { 
        id: "inc-5", 
        label: "12-20 萬", 
        value: "120k-200k" 
    },
    { 
        id: "inc-6", 
        label: "20 萬以上", 
        value: "above-200k" 
    },
  ];

  return (
    <>
      <div className="d-flex gap-4 border-bottom pb-6 mb-6">
        <div className="flex-shrink-0 side-width">
          <h2 className="fs-4 mb-3">職旅計劃概況</h2>
          <p className="text-natural-60">
            欄位皆為 <span className="badge rounded-pill text-bg-danger ms-1">必填</span>
          </p>
        </div>

        <div className="flex-grow-1">
          {/* 職業狀態 */}
          <div className="mb-5">
            <p className="mb-2">目前職業狀態</p>
            <div className="px-2">
              {jobStatusList.map((item) => (
                <div className="form-check form-check-inline me-4 mb-2" key={item.id}>
                  <input
                    {...register("jobStatus", { required: "請選擇職業狀態" })}
                    className="form-check-input"
                    type="radio"
                    id={item.id}
                    value={item.value}
                  />
                  <label className="form-check-label" htmlFor={item.id}>{item.value}</label>
                </div>
              ))}
              {errors.jobStatus && <p className="text-danger fs-sm">{errors.jobStatus.message}</p>}
            </div>
          </div>

          {/* 工作產業 */}
          <div className="mb-5">
            <select 
              className={`form-select py-3 ${errors.industry ? 'is-invalid' : ''}`}
              {...register("industry", { required: "請選擇產業" })}
            >
              <option defaultValue="">選擇工作產業</option>
              {industryList.map(item => <option key={item} defaultValue={item}>{item}</option>)}
            </select>
          </div>

          {/* 工作年資 */}
          <div className="mb-5">
            <select 
              className={`form-select py-3 ${errors.seniority ? 'is-invalid' : ''}`}
              {...register("seniority", { required: "請選擇年資" })}
            >
              <option defaultValue="">選擇工作年資</option>
              {seniorityList.map(item => <option key={item} defaultValue={item}>{item}</option>)}
            </select>
          </div>

          {/* 月收入區間 */}
          <div className="mb-5">
            <p className="mb-2">月收入區間</p>
            <div className="px-2">
              {incomeList.map((item) => (
                <div className="form-check form-check-inline me-4 mb-2" key={item.id}>
                  <input
                    {...register("incomeStatus", { required: "請選擇收入區間" })}
                    className="form-check-input"
                    type="radio"
                    id={item.id}
                    value={item.value}
                  />
                  <label className="form-check-label" htmlFor={item.id}>{item.label}</label>
                </div>
              ))}
              {errors.incomeStatus && <p className="text-danger fs-sm">{errors.incomeStatus.message}</p>}
            </div>
          </div>

          {/* 職業摘要 */}
          <div className="mb-5">
            <div className="form-floating">
              <textarea 
                className="form-control" 
                placeholder="職業摘要" 
                id="job-desc" 
                style={{ height: "160px" }}
                {...register("jobDescription", { required: "請輸入摘要", maxLength: 300 })}
              ></textarea>
              <label htmlFor="job-desc">職業摘要（最多 300 字）</label>
            </div>
            {errors.jobDescription && <p className="text-danger fs-sm">{errors.jobDescription.message}</p>}
          </div>

          {/* 作品展示 */}
          <div className="mb-5">
            <div className="form-floating">
              <input 
                type="text" 
                className="form-control" 
                id="works" 
                placeholder="作品案例展示"
                {...register("portfolioUrl")}
              />
              <label htmlFor="works">作品案例展示 (連結)</label>
            </div>
          </div>

          {/* 檔案上傳 */}
          <div>
            <p className="mb-2">附件檔案</p>
            <label htmlFor="fileUpload" className="btn border button-upload">
              <span className="material-icons-outlined me-1 align-bottom">file_upload</span>
              上傳檔案
            </label>
            <input 
              type="file"
              id="fileUpload"
              className="d-none"
              {...register("attachment")}
            />
          </div>
        </div>
      </div>
    </>
  );
}