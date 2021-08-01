import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import IPage from '../../interfaces/page'
import logging from '../../config/logging'
import { aboutPath, landingPath, mainPath } from '../../interfaces/pagePaths'

import style from './navBar.module.css'

const NavBar: React.FunctionComponent<IPage> = props => {


    useEffect(() => {
        logging.info(`loading ${props.name}`)
    }, [props.name])

    return (
        <div className={style.navbar}>
            <div className={style.links}>
                <NavLink className={style.eachLink} activeClassName={style.activeLink} exact to={aboutPath}>About</NavLink>
                <NavLink className={style.eachLink} activeClassName={style.activeLink} exact to={mainPath}>Main</NavLink>
                <NavLink className={style.eachLink} activeClassName={style.activeLink} exact to={landingPath}>Landing</NavLink>
            </div>
        </div>
    )
}

export default NavBar