import React, {useEffect, useState} from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import IPage from '../interfaces/page'
import logging from '../config/logging' 
import { homePath } from '../interfaces/pagePaths'

//                                               ↓to access the match.params and withRouter()
const ParamsTesting: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        logging.info(`loading ${props.name}`)

        let number = props.match.params.number
        if (number){
            setMessage(`the number is ${number}`)
        }
        else {
            setMessage(`no number found`)
        }

    },[props])

    
    return (
        <div>
            <div>
                {message}
            </div>
            <div>
                <Link to = {homePath}>Go to HomePage</Link>
            </div>
        </div>
    )
}

export default withRouter(ParamsTesting)