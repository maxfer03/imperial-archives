import { CharacterActionTypes } from "../redux/actions/actionTypes";
import { Store } from "redux";

// Define the Character type
export interface ICharacter {
    name: string;
    height: string;
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
    url: string;
}

// Define the Character State
export interface ICharacterState {
    readonly characters: ICharacter[];
}

// Interface for Get All Action Type
export interface ICharacterGetAllAction {
    type: CharacterActionTypes.GET_ALL;
    characters: ICharacter[];
}

export interface IAppState {
    characterState: ICharacterState;
}

export interface IProps {
    store: Store<IAppState>;
}
