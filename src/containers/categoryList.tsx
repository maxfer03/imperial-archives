import { render } from '@testing-library/react';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { IAppState, IData } from '../interfaces/reduxInterfaces';
import style from './categoryList.module.css'
interface IProps {
  data: IData[];
}

const CategoryList: React.FunctionComponent<IProps> = ({data}) => {
  const [loading, setloading] = useState<boolean>(false);

  console.log(data)
  return (
    <div>
      {data.map( e => 
        {return (
          <div> {'>'} {e.name}</div>
        )}
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