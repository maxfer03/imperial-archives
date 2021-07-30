import { Reducer } from "redux";
import { CharacterActions, CharacterActionTypes } from "../actions/actionTypes";
import { ICharacterState } from "../../interfaces/reduxInterfaces";

const initialCharacterState: ICharacterState = {
  characters: [],
};

export const characterReducer: Reducer<ICharacterState, CharacterActions> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case CharacterActionTypes.GET_ALL: {
      return {
        ...state,
        characters: action.characters,
      };
    }
    default:
      return state;
  }
};
