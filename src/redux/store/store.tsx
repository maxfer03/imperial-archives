import { applyMiddleware, combineReducers, createStore, Store, compose } from 'redux';
import thunk from 'redux-thunk';
import { IDataState, IAppState } from '../../interfaces/reduxInterfaces';
import { dataReducer } from '../reducer/reducer';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers<IAppState>({
    dataState: dataReducer,
});

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunk)));
    return store;
}