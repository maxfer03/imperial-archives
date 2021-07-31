import React, {useEffect, useState} from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import IPage from '../../interfaces/page'
import logging from '../../config/logging'

//                                               ↓to access the match.params and the withRouter()
const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {


    useEffect(() => {
        logging.info(`loading ${props.name}`)
    },[props.name])

    
    
    return (
        <div>
            <div>
                About Me!
            </div>
        </div>
    )
}

export default withRouter(AboutPage)