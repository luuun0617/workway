export default function AppointList() {
    return(<>
    <div className="tab-pane fade" 
      id="pills-record" 
      role="tabpanel" 
      aria-labelledby="pills-record-tab"
      tabIndex="0"
    >
      <h2 className="fs-4 mb-5">預約紀錄</h2>
      <div className="d-flex gap-4 mb-6">
        <div className="card w-100">
          <div className="card-body text-center py-4">
            <h3 className="fs-2 fw-bold mb-2 text-primary">3</h3>
            <p className="subtitle">已完成諮詢</p>
          </div>
        </div>
        <div className="card w-100">
          <div className="card-body text-center py-4">
            <h3 className="fs-2 fw-bold mb-2 text-primary">2025/10/10</h3>
            <p className="subtitle">即將到來</p>
          </div>
        </div>
        <div className="card w-100">
          <div className="card-body text-center py-4">
            <h3 className="fs-2 fw-bold mb-2 text-primary">3/6</h3>
            <p className="subtitle">使用方案進度</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-5">
        <div>
          <button type="button" className="btn btn-dark me-2">全部預約</button>
          <button type="button" className="btn btn-outline-dark border me-2">已完成</button>
          <button type="button" className="btn btn-outline-dark border me-2">已取消</button>
        </div>
        <div className="dropdown">
          <button className="btn border" 
            type="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >排序
            <span className="material-icons-outlined align-bottom ms-1">filter_list</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">新到舊</a></li>
            <li><a className="dropdown-item" href="#">新到舊</a></li>                    </ul>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">諮詢方案</th>
            <th scope="col">預約日期</th>
            <th scope="col">諮詢時長</th>
            <th scope="col">諮詢方式</th>
            <th scope="col">上課狀態</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>職涯定位-職涯探索包 | 6/6堂</td>
            <td>2025/11/11</td>
            <td>60分鐘</td>
            <td><span className="badge rounded-pill text-natural-60 border">視訊</span></td>
            <td>等待上課</td>
          </tr>
          <tr>
            <td>職涯定位-職涯探索包 | 5/6堂</td>
            <td>2025/10/10</td>
            <td>60分鐘</td>
            <td><span className="badge rounded-pill text-natural-60 border">視訊</span></td>
            <td>等待上課</td>
          </tr>
          <tr>
            <td className="text-natural-60">職涯定位-職涯探索包 | 4/6堂</td>
            <td className="text-natural-60">2025/09/09</td>
            <td className="text-natural-60">60分鐘</td>
            <td className="text-natural-60"><span className="badge rounded-pill text-natural-60 border">視訊</span></td>
            <td className="text-natural-60">已完成</td>
          </tr>
          <tr>
            <td className="text-natural-60">職涯定位-職涯探索包 | 3/6堂</td>
            <td className="text-natural-60">2025/08/08</td>
            <td className="text-natural-60">60分鐘</td>
            <td className="text-natural-60"><span className="badge rounded-pill text-natural-60 border">面對面</span></td>
            <td className="text-natural-60">已完成</td>
          </tr>
          <tr>
            <td className="text-natural-60">職涯定位-職涯探索包 | 2/6堂</td>
            <td className="text-natural-60">2025/07/07</td>
            <td className="text-natural-60">60分鐘</td>
            <td className="text-natural-60"><span className="badge rounded-pill text-natural-60 border">面對面</span></td>
            <td className="text-natural-60">已完成</td>
          </tr>
          <tr>
            <td className="text-natural-60">職涯定位-職涯探索包 | 1/6堂</td>
            <td className="text-natural-60">2025/07/07</td>
            <td className="text-natural-60">90分鐘</td>
            <td className="text-natural-60"><span className="badge rounded-pill text-natural-60 border">面對面</span></td>
            <td className="text-natural-60">已完成</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>)
}