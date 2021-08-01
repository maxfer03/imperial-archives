import { IDataGetAllAction } from "../../interfaces/reduxInterfaces";
import { IDataGetDetailAction } from "../../interfaces/reduxInterfaces";
export enum DataActionTypes {
    GET_ALL = 'GET_ALL',
    GET_DETAIL = 'GET_DETAIL'
}

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type DataActions = IDataGetAllAction | IDataGetDetailAction;