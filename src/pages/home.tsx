import React, {useEffect} from 'react'
import IPage from '../interfaces/page'
import logging from '../config/logging' 

const HomePage: React.FunctionComponent<IPage> = props => {
    
    useEffect(() => {
        logging.info(`loading ${props.name}`)
    },[props.name])
    
    return (
        <div>
            homepage
        </div>
    )
}

export default HomePage