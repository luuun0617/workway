export default function Privacy() {
    const privacyData = [
        {
          title: "一、蒐集的資料類型",
          content: "當你註冊帳號、填寫職涯計劃、進行諮詢預約或與我們聯繫時，我們可能會蒐集以下資訊：",
          list: ["基本資料：姓名、生日、性別、聯絡方式", "帳戶資料：登入資訊、電子郵件、密碼", "使用紀錄：登入時間、瀏覽行為、表單填寫內容", "付款資訊：若您進行付費，將透過第三方金流平台處理"]
        },
        {
          title: "二、資料使用目的",
          content: "",
          list: ["提供你所需的顧問諮詢與職涯支援服務", "客製化職涯計劃與推薦內容", "用於通知、行銷或用戶研究（你可隨時取消訂閱）", "系統維運與安全防護用途"]
        },
        {
          title: "三、第三方分享",
          content: "我們不會將你的個人資料出售或任意提供給第三方。僅在以下情況例外：",
          list: ["經你明確授權同意", "為完成支付流程與帳務處理（如第三方金流）", "符合法律規定或主管機關要求"]
        },
        {
          title: "四、使用者權利",
          content: "你有權查閱、更正、刪除你的個人資料，亦可向我們請求停止處理或使用。",
          list: []
        },
        {
          title: "五、資料保存與安全",
          content: "我們會採用合理技術與程序，保護你的個人資料安全。除非另有法定或業務必要，我們不會永久保留你的資料。",
          list: []
        },
        {
          title: "六、Cookie 技術",
          content: "我們可能使用 Cookie 來記錄用戶偏好與瀏覽行為，用以提升服務體驗。你可以透過瀏覽器設定停用。",
          list: []
        }
    ];
    return(<>
      <main className="py-lg-7 py-6 bg-gray">
        <div className="container px-3 px-lg-0">
          <div className="text-center d-flex flex-column align-items-center">
            <h2 className="fs-4xl mb-lg-6 mb-5">隱私權政策</h2>
            <div className="col-lg-10 col-12 text-start">
              <p className="fs-by-lg mb-lg-5 mb-4">最後更新日期：2025 年 1 月 1 日</p>
              <p className="fs-by-md mb-lg-5 mb-4">
                我們重視你的個人隱私。當你使用職旅 WorkWay（以下簡稱「本網站」或「我們」）的服務時，我們會依據本政策保護你的個人資料安全，並尊重你的資訊自主權。
              </p>
              {privacyData.map((section, i) => (
                <div className="mb-lg-5 mb-4" key={i}>
                  <p className="fs-by-xl mb-lg-3 mb-2">{section.title}</p>
                  {section.content && <p className="fs-by-md">{section.content}</p>}
                  
                  {section.list.length > 0 && (
                    <ul className="mb-0">
                      {section.list.map((item, i) => (
                        <li className="fs-by-md" key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div>
                <p className="fs-by-xl mb-lg-3 mb-2">七、政策更新</p>
                <p className="fs-by-md">
                  我們保留隨時修改本政策之權利，重大變更將提前公告。
                  <br />
                  如對本政策有任何疑問，請聯繫：
                  <a href="mailto:privacy@workway.com" className="ms-1">
                    privacy@workway.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>)
}