import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import IPage from '../../interfaces/page'
import logging from '../../config/logging'
import { aboutPath, homePath, mainPath } from '../../interfaces/pagePaths'

import style from './navBar.module.css'

const NavBar: React.FunctionComponent<IPage> = props => {


    useEffect(() => {
        logging.info(`loading ${props.name}`)
    }, [props.name])

    return (
        <div className={style.navbar}>
            <div className={style.links}>
                <Link to={aboutPath}>About</Link>
                <Link to={mainPath}>Main</Link>
                <Link to={homePath}>Home</Link>
            </div>
        </div>
    )
}

export default NavBar