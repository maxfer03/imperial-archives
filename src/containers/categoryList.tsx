import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import { IAppState, IData } from '../interfaces/reduxInterfaces';
import style from './categoryList.module.css'
interface IProps {
  data: IData[];
}

const CategoryList: React.FunctionComponent<IProps> = ({data}) => {
  console.log(data)
  return (
    <div>
      {data.map( e => 
        {return (
          <div>{e.name}</div>
        )}
      )}
    </div>
  )

}

/* class CategoryList extends React.Component<IProps> {
  public render() {
    const { characters } = this.props;
    return (
      <div className={style.characters}>
        {characters &&
          characters.map(character => {
            return (
              <span key={character.name} className="name">
                {character.name}
              </span>
            );
          })}
      </div>
    );
  }
} */

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    data: store.dataState.data,
  };
};

export default connect(mapStateToProps)(CategoryList);