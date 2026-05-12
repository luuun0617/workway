import { createHashRouter } from "react-router-dom";

import App from '../App';

import { FrontPage ,About , Plan , Contact , Privacy , Terms } from "../pages/Catalog";
import User from "../personal/User";
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
      {
        path:'privacy',
        element:<Privacy />
      },
      {
        path:'terms',
        element:<Terms />
      },
      {
        path:'user',
        element:<User />
      },
    ]
  }
]
const router = createHashRouter(routes)
export default router