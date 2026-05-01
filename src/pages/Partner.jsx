import team from "../assets/images/team.png"
export default function Partner() {
    return(<>
    <div className="py-lg-7 py-6 career-partner">
        <div className="container px-lg-0 px-3">
          <div
            className="d-flex flex-lg-row flex-column"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="col-lg-6 col mb-5 mb-lg-0 px-lg-5 px-0">
              <img
                src={team}
                alt="team"
                className="rounded-1 img-fluid"
              />
            </div>
            <div className="col-lg-6 col px-lg-3 px-0">
              <h3 className="text-center text-lg-start mb-4 mb-lg-5 fs-5xl">
                遇見你的職涯夥伴
              </h3>
              <p className="text-natural-50 fs-by-lg mb-4 mb-lg-5">
                每位顧問都有獨特專長，更重要的是：
              </p>
              <p className="d-inline-block text-primary mb-4 mb-lg-5 fs-2xl bg-partner p-2">
                “ 他們都曾面對你正在經歷的挑戰 ”
              </p>
              <p className="fs-by-lg text-natural-50 mb-4 mb-lg-5">
                職旅 WorkWay匯集了來自不同領域、擁有豐富實戰經驗的自由工作者與數位遊牧專家。我們的顧問不只教授理論，更分享親身經歷的挑戰與解決之道。
              </p>
              <p className="fs-by-lg text-natural-50 mb-4 mb-lg-5">
                我們相信，最好的指導來自於那些已經走過你想走的路，並願意伸出手拉你一把的人。
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <button type="button" className="btn btn-dark btn-about">
                  <a href="about.html" className="me-lg-1 me-0 fs-by-md text-white">
                    了解更多職旅夥伴
                  </a>
                  <span className="material-icons-outlined align-bottom">keyboard_arrow_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>)
}