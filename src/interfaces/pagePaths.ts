import routes from "../config/routes";

// this file automatically updates the routes whenever the route.ts file is changed, so by
// calling this variables in the components, it wont matter if the path is changed.

const homePath: string = routes[0].path
const aboutPath: string = routes[1].path

export {homePath, aboutPath}