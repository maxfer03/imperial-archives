import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { indexStore } from '..';
import { getDetail } from '../redux/actions/actionCreators';
import { connect } from 'react-redux';
import { IAppState, IData } from '../interfaces/reduxInterfaces';
import style from './categoryList.module.css'
interface IProps {
  data: IData[];
  loading: boolean
}

const CategoryList: React.FunctionComponent<IProps> = ({ data, loading }) => {
  const loadingDiv = document.querySelector(".loading")

  function handleDetailFetch(e: any) {
    const name: string = e.target.innerText
    const formattedName: string = encodeURIComponent(name.slice(2).toLowerCase())
    console.log(`${name} = ${formattedName}`)
    const fetchDetail = async () => {
      //setLoading(true)
      await indexStore.dispatch(getDetail(formattedName))
      //setLoading(false)
    }
    fetchDetail()
  }


  if (loading) {
    return (
      <div className="loading">Loading...</div>
    )
  }

  else return (
    <div>
      {data.map(e => {
        return (
          <div className={style.name}
            onClick={(e) => handleDetailFetch(e)}>
            {'>'} {e.name.toUpperCase()}
          </div>
        )
      }
      )}
    </div>
  )

}

const mapStateToProps = (store: IAppState) => {
  return {
    data: store.dataState.data,
  };
};

export default connect(mapStateToProps)(CategoryList);