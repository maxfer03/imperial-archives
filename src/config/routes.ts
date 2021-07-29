import IRoute from "../interfaces/route";
import AboutPage from "../pages/about";
import HomePage from "../pages/home";



const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        exact: true ,
        component: HomePage,
    },
    {
        path: '/about/:number',
        name: 'About Page',
        exact: true ,
        component: AboutPage,
    }
]

export default routes;