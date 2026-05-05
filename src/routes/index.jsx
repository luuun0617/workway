import { createHashRouter } from "react-router-dom";

import App from '../App';

import { FrontPage ,About , Plan , Contact } from "../pages/Catalog";
// import FrontPage from '../pages/FrontPage'
// import About from '../pages/About'
// import Plan from '../pages/Plan'
// import Contact from '../pages/Contact';
const routes = [
  {
    path: '/',
    element:<App />,
    children:[
      {
        index:true,
        element:<FrontPage />
      },
      {
        path:'plan',
        element:<Plan />
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'contact',
        element:<Contact />
      },
    ]
  }
]
const router = createHashRouter(routes)
export default router