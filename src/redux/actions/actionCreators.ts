import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import {
  IData,
  IDataState,
  IDataGetAllAction,
  IDataGetDetailAction
} from "../../interfaces/reduxInterfaces";
import { DataActionTypes } from "./actionTypes";

export const getAllCategory: ActionCreator<
  ThunkAction<Promise<any>, IDataState, null, IDataGetAllAction>
> = (endpoint?: string) => {
  console.log(endpoint)
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/${endpoint}/`);
      dispatch({
        data: response.data.results,
        type: DataActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getDetail: ActionCreator<
  ThunkAction<Promise<any>, IDataState, null, IDataGetDetailAction>
> = (name?: string) => {
  name = 'r2'
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
      dispatch({
        data: response.data.results,
        type: DataActionTypes.GET_DETAIL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
