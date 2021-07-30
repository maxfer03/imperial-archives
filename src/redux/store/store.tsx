import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { ICharacterState, IAppState } from '../../interfaces/reduxInterfaces';
import { characterReducer } from '../reducer/reducer';

const rootReducer = combineReducers<IAppState>({
    characterState: characterReducer,
});

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}