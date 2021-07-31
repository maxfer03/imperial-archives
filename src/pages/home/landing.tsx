import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import IPage from '../../interfaces/page'
import logging from '../../config/logging'
import { mainPath } from '../../interfaces/pagePaths'

import style from './landing.module.css'
import imperial_logo from '../../imgs/empire-symbol.png'


const Landing: React.FunctionComponent<IPage> = props => {


    useEffect(() => {
        logging.info(`loading ${props.name}`)
    }, [props.name])

    return (

        <div className={style.main}>
            <div className={style.impLogoContainer}>
                <img src={imperial_logo} className={style.impLogo} />
            </div>
            <div>
                <Link to={mainPath}>Main</Link>

            </div>
        </div>


    )
}

export default Landing