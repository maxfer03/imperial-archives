import React from 'react';
import { connect } from 'react-redux';
import { IAppState, ICharacter } from '../interfaces/reduxInterfaces';
import style from './categoryList.module.css'
interface IProps {
    characters: ICharacter[];
}

class CategoryList extends React.Component<IProps> {
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
  }
  
  // Grab the characters from the store and make them available on props
  const mapStateToProps = (store: IAppState) => {
    return {
      characters: store.characterState.characters,
    };
  };
  
  export default connect(mapStateToProps)(CategoryList);