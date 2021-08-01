import { Reducer } from "redux";
import { DataActions, DataActionTypes } from "../actions/actionTypes";
import { IDataState } from "../../interfaces/reduxInterfaces";

const initialState: IDataState = {
  data: [],
  detail: {
    name: ''
  }
};

export const dataReducer: Reducer<IDataState, DataActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case DataActionTypes.GET_ALL: {
      return {
        ...state,
        data: action.data,
      };
    }
    case DataActionTypes.GET_DETAIL: {
      return {
        ...state,
        detail: action.data,
      };
    }
    default:
      return state;
  }
};
