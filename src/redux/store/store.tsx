import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { IDataState, IAppState } from '../../interfaces/reduxInterfaces';
import { dataReducer } from '../reducer/reducer';

const rootReducer = combineReducers<IAppState>({
    dataState: dataReducer,
});

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}