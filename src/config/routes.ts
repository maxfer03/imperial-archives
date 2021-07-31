import IRoute from "../interfaces/route";
import aboutPage from "../pages/about/about";
import Landing from "../pages/home/landing";
import paramsTesting from "../pages/paramsTesting/paramsTesting";
import displayData from "../pages/displayData/displayData";
import navBar from "../pages/navBar/navBar";
import navbarSpacing from "../otherComponents/navbarSpacing";



const routes: IRoute[] = [
    {
        path: '/start',
        name: 'Landing',
        exact: true ,
        component: Landing,
    },
    {
        path: '/main',
        name: 'NavBar',
        exact: false ,
        component: navBar,
    },
    {
        path: '/main',
        name: 'NavBarSpacing',
        exact: false ,
        component: navbarSpacing,
    },
    {
        path: '/main',
        name: 'Display_Data',
        exact: true ,
        component: displayData,
    },
    {
        path: '/main/about',
        name: 'About',
        exact: true ,
        component: aboutPage,
    },
    {
        path: '/params/:number',
        name: 'Testing_Params',
        exact: true ,
        component: paramsTesting,
    },
    
]
export default routes;
