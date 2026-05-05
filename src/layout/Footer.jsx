import '../assets/scss/layout/_footer.scss';
import { NavLink } from "react-router-dom";
function Footer() {
    const footerLinks = [
        { name: "服務方案", to: "/Plan" },
        { name: "關於職旅", to: "/About" },
        { name: "聯絡我們", to: "/Contact" },
        { name: "隱私權政策", to: "/Privacy" },
        { name: "用戶條款", to: "/Terms" },
    ];

    const linkStyle = "px-4 py-2 mb-2 fs-by-md text-natural-10 nav-link";
    return(<>
    <main className="bg-gray">
        <div className="container border-top">
            <div className="d-flex flex-lg-nowrap flex-wrap justify-content-center py-lg-6 py-5 px-0 px-3">
                {
                    footerLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        className={({ isActive }) => 
                          isActive ? `${linkStyle} fw-bold` : linkStyle
                        }
                        to={link.to}
                      >
                        {link.name}
                      </NavLink>
                    ))
                }
                {/* <a className="px-4 py-2 mb-2 fs-by-md text-natural-10" href="about.html">關於職旅</a>
                <a className="px-4 py-2 mb-2 fs-by-md text-natural-10" href="contact.html">聯絡我們</a>
                <a className="px-4 py-2 mb-2 fs-by-md text-natural-10" href="privacy.html">隱私權政策</a>
                <a className="px-4 py-2 mb-2 fs-by-md text-natural-10" href="terms.html">用戶條款</a> */}
                <p className="workway-sologan ms-auto fs-by-sm py-2 mb-2">Copyright © 2025 職旅 workway. All rights reserved.</p>
            </div>
        </div>
    </main>
    </>)
}

export default Footer