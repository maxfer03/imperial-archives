import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import {
  ICharacter,
  ICharacterState,
  ICharacterGetAllAction,
} from "../../interfaces/reduxInterfaces";
import { CharacterActionTypes } from "./actionTypes";

export const getAllCategory: ActionCreator<
  ThunkAction<Promise<any>, ICharacterState, null, ICharacterGetAllAction>
> = (endpoint?: string) => {
  console.log(endpoint)
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/${endpoint}/`);
      dispatch({
        characters: response.data.results,
        type: CharacterActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
