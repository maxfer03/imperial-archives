import React, { useEffect, useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import IPage from '../../interfaces/page'
import logging from '../../config/logging'
import CategoryList from '../../containers/categoryList'
import { indexStore } from '../../index'
import { getAllCategory } from '../../redux/actions/actionCreators'
import { landingPath } from '../../interfaces/pagePaths'
import style from './displayData.module.css'
import imperial_logo from '../../imgs/empire-symbol.png'


//                                               ↓to access the match.params and the withRouter()
const DisplayData: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        logging.info(`loading ${props.name}`)
    }, [props.name])

    function handleClick(e: any) {
        const endpoint: string = e.target.innerText

        const fetchData = async () => {
            setLoading(true)
            await indexStore.dispatch(getAllCategory(endpoint.toLowerCase()))
            setLoading(false)
        }
        fetchData()
    }



    return (
        <div className={style.mainContainer}>
            <div className = {style.crt}>
                
                <div className={style.main}>

                    <div>
                        <div className={style.filters}>
                            <button className={style.eachFilter} onClick={(e: any) => handleClick(e)}>People</button>
                            <button className={style.eachFilter} onClick={(e: any) => handleClick(e)}>Starships</button>
                            <button className={style.eachFilter} onClick={(e: any) => handleClick(e)}>Species</button>
                            <button className={style.eachFilter} onClick={(e: any) => handleClick(e)}>Planets</button>
                            <button className={style.eachFilter} onClick={(e: any) => handleClick(e)}>Vehicles</button>
                        </div>

                        <div className={style.data}>
                            <CategoryList loading = {loading} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(DisplayData)