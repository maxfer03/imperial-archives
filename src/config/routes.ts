import IRoute from "../interfaces/route";
import AboutPage from "../pages/about";
import HomePage from "../pages/home";
import ParamsTesting from "../pages/paramsTesting";



const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        exact: true ,
        component: HomePage,
    },
    {
        path: '/about',
        name: 'About',
        exact: true ,
        component: AboutPage,
    },
    {
        path: '/params/:number',
        name: 'Testing_Params',
        exact: true ,
        component: ParamsTesting,
    }
]
export default routes;
