function PicStart() {
    const data = {
        hero1:{
            id:1,
            title:'hero-1',
            imageUrl:'../assets/images/hero-1.png',
        },
        hero2:{
            id:2,
            title:'hero-2',
            imageUrl:'../assets/images/hero-2.png',
        },
        hero3:{
            id:3,
            title:'hero-3',
            imageUrl:'../assets/images/hero-3.png',
        },
        hero4:{
            id:4,
            title:'hero-4',
            imageUrl:'../assets/images/hero-4.png',
        },
    }
    return(<>
    <div className="container-fluid">
        <div className="mb-lg-7 mb-6">
          <div className="row px-lg-3 px-0">
            <div className="col-lg-4 d-none d-lg-block px-3" data-aos="fade-down">
              <img src={data.hero1.imageUrl} alt={data.hero1.title} className='img-fluid' />
            </div>
            <div className="col-lg-4 d-none d-lg-flex px-3 flex-lg-column justify-content-between" data-aos="fade-down">
              <img src={data.hero2.imageUrl} alt={data.hero2.title} />
              <img src={data.hero3.imageUrl} alt={data.hero3.title} />
            </div>
            <div className="col-lg-4 col px-lg-3 px-0" data-aos="fade-down">
              <img src={data.hero4.imageUrl} alt={data.hero4.title} className='img-fluid' />
            </div>
          </div>
        </div>
    </div>
    </>)
}

export default PicStart