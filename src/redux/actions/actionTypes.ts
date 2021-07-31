import { IDataGetAllAction } from "../../interfaces/reduxInterfaces";

export enum DataActionTypes {
    GET_ALL = 'GET_ALL',
}

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type DataActions = IDataGetAllAction;