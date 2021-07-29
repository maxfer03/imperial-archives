import routes from "../config/routes"

// this file automatically updates the routes whenever the route.ts file is changed, so by
// calling this variables in the components, it wont matter if the path is changed.
//wip

const homePath: string = '/'//routes[0].path esto no funciona y no capto por que
const aboutPath: string = '/about'//routes[1].path
console.log(routes)
export {homePath, aboutPath}