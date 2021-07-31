import React, { useEffect, useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import IPage from '../../interfaces/page'
import logging from '../../config/logging'
import CharacterList from '../../containers/characterList'
import { indexStore } from '../../index'
import { getAllCharacters } from '../../redux/actions/actionCreators'
import { homePath } from '../../interfaces/pagePaths'
import style from './displayData.module.css'


//                                               ↓to access the match.params and the withRouter()
const DisplayData: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {


    useEffect(() => {
        logging.info(`loading ${props.name}`)
    }, [props.name])

    function handleClick(e: any) {
        e.preventDefault()
        console.log(e.target.innerText)
        indexStore.dispatch(getAllCharacters())
    }

    return (
        <div>
            <div>

                <button onClick={(e: any) => handleClick(e)}>People</button>
                <button onClick={(e: any) => handleClick(e)}>Ships</button>
                <button onClick={(e: any) => handleClick(e)}>Planets</button>
                <button onClick={(e: any) => handleClick(e)}>Species</button>

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