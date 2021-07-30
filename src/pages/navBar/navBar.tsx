import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import IPage from '../../interfaces/page'
import logging from '../../config/logging' 
import { aboutPath, homePath, mainPath } from '../../interfaces/pagePaths'

const NavBar: React.FunctionComponent<IPage> = props => {

    
    useEffect(() => {
        logging.info(`loading ${props.name}`)
    },[props.name])
    
    return (
        <div>
            <div>this is the nav bar</div>
            <Link to ={aboutPath}>About</Link>
            <Link to ={mainPath}>Main</Link>
            <Link to ={homePath}>Home</Link>
        </div>
    )
}

export default NavBar