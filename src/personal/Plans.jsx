export default function Plans({ register, errors }) {
  const workModes = [
    { 
      id: "place-office", 
      label: "固定辦公室工作", 
      value: "office" 
    },
    { 
      id: "place-hybrid", 
      label: "混合式工作(辦公室+遠端)", 
      value: "hybrid" 
    },
    { 
      id: "place-wfh", 
      label: "完全遠端工作(固定地點)", 
      value: "workForHome" 
    },
    { 
      id: "place-digital", 
      label: "數位遊牧(邊工作邊旅行)", 
      value: "digital" 
    },
    { 
      id: "place-other", 
      label: "其他(請說明)", 
      value: "other" 
    },
  ];

  const careerChallenges = [
    "方向不明確", 
    "技能需要提升", 
    "收入不穩定", 
    "客戶開發困難",
    "時間管理問題", 
    "工作生活失衡", 
    "缺乏人脈資源", 
    "其他(請說明)"
  ];

  const assistanceResources = [
    "職涯方向指導", 
    "專業技能提升建議", 
    "個人品牌建立", 
    "接案策略與定價",
    "客戶開發方法", 
    "財務規劃", 
    "時間管理系統", 
    "工作生活平衡", 
    "其他(請說明)"
  ];

  const servicePlans = ["探索定位", "客製化方案", "實戰指導"];

  return (
    <>
      <div className="d-flex gap-4 border-bottom pb-6 mb-6">
        {/* 左側標題區 */}
        <div className="flex-shrink-0 side-width">
          <h2 className="fs-4 mb-3">職涯規劃</h2>
          <p className="text-natural-60">
            欄位皆為 <span className="badge rounded-pill text-bg-danger ms-1">必填</span>
          </p>
        </div>

        {/* 右側表單區 */}
        <div className="flex-grow-1">
          {/* 短期目標 */}
          <div className="mb-5">
            <div className="form-floating">
              <textarea
                className={`form-control ${errors.shortTermGoal ? 'is-invalid' : ''}`}
                placeholder="Leave a comment here"
                id="year-career-goal"
                style={{ height: "160px" }}
                {...register("shortTermGoal", { 
                  required: "請填寫短期目標" 
                })}
              ></textarea>
              <label htmlFor="year-career-goal">1 年短期職涯目標（最多 300 字）</label>
            </div>
          </div>

          {/* 長期願景 */}
          <div className="mb-5">
            <div className="form-floating">
              <textarea
                className={`form-control ${errors.longTermVision ? 'is-invalid' : ''}`}
                placeholder="Leave a comment here"
                id="years-career-goal"
                style={{ height: "160px" }}
                {...register("longTermVision", { 
                  required: "請填寫長期願景" 
                })}
              ></textarea>
              <label htmlFor="years-career-goal">1-3 年中長期職涯願景（最多 300 字）</label>
            </div>
          </div>

          {/* 理想工作模式 */}
          <div className="mb-5">
            <p className="mb-2">理想工作模式</p>
            <div className="px-2">
              {workModes.map((mode) => (
                <div className="form-check form-check-inline me-4 mb-2" key={mode.id}>
                  <input
                    className="form-check-input"
                    type="radio"
                    id={mode.id}
                    value={mode.value}
                    {...register("placeStatus", { 
                      required: true 
                    })}
                  />
                  <label 
                  className="form-check-label" 
                  htmlFor={mode.id}>
                    {mode.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* 目標薪資 */}
          <div className="mb-5">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="income"
                placeholder="目標薪資/收入"
                {...register("targetIncome", { required: true })}
              />
              <label htmlFor="income">目標薪資/收入</label>
            </div>
          </div>

          {/* 職涯挑戰 */}
          <div className="mb-5">
            <p className="mb-2">目前面臨的職涯挑戰</p>
            <div className="px-2">
              {careerChallenges.map((challenge, index) => (
                <div className="form-check form-check-inline me-4 mb-2" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`challenge-${index}`}
                    value={challenge}
                    {...register("challenges")}
                  />
                  <label className="form-check-label" htmlFor={`challenge-${index}`}>
                    {challenge}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* 期望獲得的協助 */}
          <div className="mb-5">
            <p className="mb-2">期望獲得的協助與資源</p>
            <div className="px-2">
              {assistanceResources.map((res, index) => (
                <div className="form-check form-check-inline me-4 mb-2" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`resource-${index}`}
                    value={res}
                    {...register("resources")}
                  />
                  <label className="form-check-label" htmlFor={`resource-${index}`}>
                    {res}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* 服務方案 */}
          <div>
            <p className="mb-2">感興趣的服務方案</p>
            <div className="px-2">
              {servicePlans.map((plan, index) => (
                <div className="form-check form-check-inline me-4 mb-2" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`help-${index}`}
                    value={plan}
                    {...register("interestedPlans")}
                  />
                  <label className="form-check-label" htmlFor={`help-${index}`}>
                    {plan}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}