import routes from "../config/routes"

// this file automatically updates the routes whenever the route.ts file is changed, so by
// calling this variables in the components, it wont matter if the path is changed.
//wip

const homePath: string = '/'//routes[x].path esto no funciona y no capto por que
const aboutPath: string = '/main/about'//routes[x].path
const mainPath: string = "/main"
export {homePath, aboutPath, mainPath}