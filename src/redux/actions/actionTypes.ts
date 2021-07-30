import { ICharacterGetAllAction } from "../../interfaces/reduxInterfaces";

export enum CharacterActionTypes {
    GET_ALL = 'GET_ALL',
}

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type CharacterActions = ICharacterGetAllAction;