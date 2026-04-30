import '../assets/scss/layout/_footer.scss';
function Footer() {
    return(<>
    <main className="bg-gray">
        <div className="container border-top">
            <div className="d-flex flex-lg-nowrap flex-wrap justify-content-center py-lg-6 py-5 px-0 px-3">
                <a className="px-4 py-2 mb-2 fs-by-md text-natural-10" href="plan.html">服務方案</a>
                <a className="px-4 py-2 mb-2 fs-by-md text-natural-10" href="about.html">關於職旅</a>
                <a className="px-4 py-2 mb-2 fs-by-md text-natural-10" href="contact.html">聯絡我們</a>
                <a className="px-4 py-2 mb-2 fs-by-md text-natural-10" href="privacy.html">隱私權政策</a>
                <a className="px-4 py-2 mb-2 fs-by-md text-natural-10" href="terms.html">用戶條款</a>
                <p className="workway-sologan ms-auto fs-by-sm py-2 mb-2">Copyright © 2025 職旅 workway. All rights reserved.</p>
            </div>
        </div>
    </main>
    </>)
}

export default Footer