import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import IPage from '../../interfaces/page'
import logging from '../../config/logging' 
import { mainPath } from '../../interfaces/pagePaths'

const HomePage: React.FunctionComponent<IPage> = props => {

    
    useEffect(() => {
        logging.info(`loading ${props.name}`)
    },[props.name])
    
    return (
        <div>
            <div>homepage</div>
            <Link to ={mainPath}>Main</Link>
        </div>
    )
}

export default HomePage