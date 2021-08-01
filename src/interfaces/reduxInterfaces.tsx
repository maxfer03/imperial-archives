import { DataActionTypes } from "../redux/actions/actionTypes";
import { Store } from "redux";

// Define the Character type
export interface IData {
    name: string;
    /* height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string; */
}

export interface IDetail {
    name: string;
}

// Define the Character State
export interface IDataState {
    readonly data: IData[];
}

// Interface for Get All Action Type
export interface IDataGetAllAction {
    type: DataActionTypes.GET_ALL;
    data: IData[];
}

export interface IDataGetDetailAction {
    type: DataActionTypes.GET_DETAIL;
    data: IDetail;
}

export interface IAppState {
    dataState: IDataState;
}

export interface IProps {
    store: Store<IAppState>;
}
