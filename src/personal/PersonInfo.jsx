import avatar from "../assets/images/avatar.png";
export default function PersonInfo() {
    return(<>
    <div className="tab-pane fade show active" 
      id="pills-info" role="tabpanel" 
      aria-labelledby="pills-info-tab"
      tabIndex="0">
      <div className="d-flex gap-4 mb-6">
        <h2 className="fs-4 flex-shrink-0 side-width">個人資料</h2>
        <div>
          <div className="mb-5">
            <img src={avatar} alt="user-image" 
              className="user-img border rounded-circle me-3"
            />
            <label htmlFor="fileUpload" className="btn border rounded-3 align-bottom">
              <span className="material-icons-outlined me-1 align-bottom">file_upload</span>
              更新頭貼
            </label>
          </div>
          <div className="form-floating mb-5 text-width">
            <input 
                type="text" 
                className="form-control" 
                id="username" 
                placeholder="姓名"
                defaultValue="Mokumaru"
            />
            <label htmlFor="username">姓名</label>
          </div>
          <div className="mb-5">
            <p className="mb-2">性別</p>
            <div className="px-2">
              <div className="form-check form-check-inline me-4">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="gender" 
                    id="woman" 
                    defaultValue="woman"
                    defaultChecked
                />
                <label className="form-check-label" 
                htmlFor="woman">女性</label>
              </div>
              <div className="form-check form-check-inline me-4">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="gender" 
                    id="man" 
                    defaultValue="man"
                    defaultChecked
                />
                <label className="form-check-label" 
                htmlFor="man">男性</label>
              </div>
              <div className="form-check form-check-inline me-4">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="gender" 
                    id="other" 
                    defaultValue="other"
                    defaultChecked
                />
                <label className="form-check-label" 
                htmlFor="other">不願透露</label>
              </div>
            </div>
          </div>
          <div className="form-floating mb-5">
            <input 
                type="date" 
                className="form-control" 
                id="birthday" 
                placeholder="birthday"
                name="birthday"
                defaultValue="2000-01-10"
            />
            <label htmlFor="birthday">birthday</label>
          </div>
          <div className="mb-5">
            <p className="mb-2">密碼</p>
            <button type="button" className="btn btn-outline-natural-60 border button-password me-4">
              修改密碼
              <span className="material-icons-outlined align-bottom ms-1">keyboard_arrow_right</span>
            </button>
          </div>
          <div className="form-floating mb-5">
            <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="name@example.com" 
                defaultValue="mokumaru@mail.com"
            />
            <label htmlFor="email">信箱</label>
            <p className="text-warn px-2">盡量勿使用Yahoo或Hotmail郵件信箱，以免因擋信、漏信</p>
          </div>
          <div className="form-floating mb-5">
            <input 
                type="text" 
                className="form-control" 
                id="number" 
                defaultValue="09-1234-5678"
            />
            <label htmlFor="number">聯絡電話</label>
          </div>
          <div className="form-floating">
            <input 
                type="text" 
                className="form-control" 
                id="address" 
                defaultValue="高雄市三民區九如一路 87 號"
            />
            <label htmlFor="address">通訊地址</label>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-outline-natural-60 button-update me-4">
          重新填寫
          <span className="material-icons-outlined align-bottom ms-1">keyboard_arrow_right</span>
        </button>
        <button type="button" className="btn btn-dark button-update">
          儲存更新
          <span className="material-icons-outlined align-bottom ms-1">keyboard_arrow_right</span>
        </button>
      </div>
    </div>
    </>)
}