import { Reducer } from "redux";
import { DataActions, DataActionTypes } from "../actions/actionTypes";
import { IDataState } from "../../interfaces/reduxInterfaces";

const initialCharacterState: IDataState = {
  data: [],
};

export const dataReducer: Reducer<IDataState, DataActions> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case DataActionTypes.GET_ALL: {
      return {
        ...state,
        data: action.data,
      };
    }
    default:
      return state;
  }
};
