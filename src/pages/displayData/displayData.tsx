import React, { useEffect, useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import IPage from '../../interfaces/page'
import logging from '../../config/logging'
import CategoryList from '../../containers/categoryList'
import { indexStore } from '../../index'
import { getAllCategory } from '../../redux/actions/actionCreators'
import { landingPath } from '../../interfaces/pagePaths'
import style from './displayData.module.css'


//                                               ↓to access the match.params and the withRouter()
const DisplayData: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        logging.info(`loading ${props.name}`)
    }, [props.name])

    function handleClick(e: any) {
        const endpoint: string = e.target.innerText
        e.preventDefault()
        //console.log(e.target.innerText)
        setLoading(true)
        indexStore.dispatch(getAllCategory(endpoint.toLowerCase()))
        setLoading(false)
    }

    if(loading){
        return <h2>Loading....</h2>
    }

    return (
        <div className={style.main}>
            <div>

                <button onClick={(e: any) => handleClick(e)}>People</button>
                <button onClick={(e: any) => handleClick(e)}>Starships</button>
                <button onClick={(e: any) => handleClick(e)}>Planets</button>
                <button onClick={(e: any) => handleClick(e)}>Species</button>
                <button onClick={(e: any) => handleClick(e)}>Vehicles</button>


                <div className={style.data}>
                    <CategoryList/>
                </div>

            </div>
            <div>
                <Link to={landingPath}>Go to HomePage</Link>
            </div>
        </div>
    )
}

export default withRouter(DisplayData)