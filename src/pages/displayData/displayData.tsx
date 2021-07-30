import React, { useEffect, useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import IPage from '../../interfaces/page'
import logging from '../../config/logging'
import CharacterList from '../../containers/characterList'
import { homePath } from '../../interfaces/pagePaths'
import style from './displayData.module.css'


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
                    <input type = 'submit' name ='people' value ='people'/>
                    <input type = 'submit' name ='ships' value ='ships'/>
                    <input type = 'submit' name ='Planets' value ='Planets'/>
                    <input type = 'submit' name ='Species' value ='Species'/>
                </form>

                <div className={style.data}>
                    <CharacterList />
                </div>
                
            </div>
            <div>
                <Link to={homePath}>Go to HomePage</Link>
            </div>
        </div>
    )
}

export default withRouter(DisplayData)