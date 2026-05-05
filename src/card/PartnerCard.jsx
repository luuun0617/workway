import mentorOne from "../assets/images/mentor-1.png"
import mentorTwo from "../assets/images/mentor-2.png"
import mentorThree from "../assets/images/mentor-3.png"
import mentorFour from "../assets/images/mentor-4.png"
import mentorFive from "../assets/images/mentor-5.png"

export default function PartnerCard() {
    const data =[
        {
            imgUrl:mentorOne,
            title:'數位遊牧先驅',
            name:'陳志遠 Ethan Chen',
            tags: ['遠端工作策略', '數位遊牧生活設計']
        },
        {
            imgUrl:mentorTwo,
            title:'個人品牌策略專家',
            name:'林曉彤 Clara Lin',
            tags: ['個人品牌建立', '內容行銷策略', '故事行銷']
        },
        {
            imgUrl:mentorThree,
            title:'財務自由規劃顧問',
            name:'王建明 Marcus',
            tags: ['稅務優化', '被動收入建立', '現金流管理']
        },
        {
            imgUrl:mentorFour,
            title:'創意接案與多元收入專家',
            name:'張雅琳 Ariel',
            tags: ['創意變現策略', '線上課程開發']
        },
        {
            imgUrl:mentorFive,
            title:'遠端工作技術顧問',
            name:'李俊宏 Kevin Lee',
            tags: ['# 專案管理自動化', '虛擬團隊管理']
        },
    ]
    return(<>
    <div className="mentor-scroll-wrap mb-lg-6 mb-5" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
      <div className="d-flex pb-lg-2 mb-4 px-2 me-5">
        {
          data.map((item,i)=>(
              <article className="card-mentor shadow me-5" key={i}>
                <img src={item.imgUrl} alt="mentor-1" />
                <div className="card-mentor-body">
                  <div className="mb-4">
                    <p className="fs-by-md text-natural-50 mb-2">{item.title}</p>
                    <p className="fs-by-2xl">{item.name}</p>
                  </div>
                  <div className="d-flex flex-wrap">
                      {item.tags.map((tag, i) => (
                        <button key={i} type="button" 
                          className="btn border fs-by-sm text-natural-50 py-1 px-2 me-2 mb-1"
                        >
                          # {tag}
                        </button>
                      ))}
                  </div>
                </div>
              </article>
          ))
        }
      </div>
    </div>
    </>)
}