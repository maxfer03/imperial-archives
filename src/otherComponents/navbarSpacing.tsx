import React, { useEffect, useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import IPage from '../interfaces/page'
import logging from '../config/logging'
import style from './navbarSpacing.module.css'

//                                               ↓to access the match.params and the withRouter()
const NavbarSpacing: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {


    useEffect(() => {
        logging.info(`loading ${props.name}`)
    }, [props.name])



    return (
        <div className ={style.blank}>
        </div>
    )
}

export default withRouter(NavbarSpacing)