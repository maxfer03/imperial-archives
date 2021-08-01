import { render } from '@testing-library/react';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { IAppState, IData } from '../interfaces/reduxInterfaces';
import style from './categoryList.module.css'
interface IProps {
  data: IData[];
  loading: boolean
}

const Detail: React.FunctionComponent<IProps> = ({data, loading}) => {
  const loadingDiv = document.querySelector(".loading")

  
  
  
  if (loading){
    return(
      <div className ="loading">Loading...</div>
    )
  }

else return (
    <div>
      <div> {'>'} Name: </div>
    </div>
  )

}

const mapStateToProps = (store: IAppState) => {
  return {
    data: store.dataState.data,
  };
};

export default connect(mapStateToProps)(Detail);