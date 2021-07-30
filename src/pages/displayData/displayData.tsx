import React, { useEffect, useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import IPage from '../../interfaces/page'
import logging from '../../config/logging'
import { homePath } from '../../interfaces/pagePaths'

//                                               ↓to access the match.params and the withRouter()
const DisplayData: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {


    useEffect(() => {
        logging.info(`loading ${props.name}`)
    }, [props.name])



    return (
        <div>
            <div>
                <form>
                    <label>
                        search: <input type='text' />
                    </label>
                </form>

                <div>
                    info displayed here
                </div>
                
            </div>
            <div>
                <Link to={homePath}>Go to HomePage</Link>
            </div>
        </div>
    )
}

export default withRouter(DisplayData)