import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Application from './application'
import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore from './redux/store/store'
import { IAppState } from './interfaces/reduxInterfaces'
import { IProps } from './interfaces/reduxInterfaces';
import { getAllCategory } from './redux/actions/actionCreators'

import './index.css'



//       or React.SFC
const Root: React.FunctionComponent <IProps> = props => {

  return (
    <Provider store={props.store}>
      <div className = 'webpage'>
        <div className = 'leftTriangle'/>
        <div className = 'leftLine'/>
        <div className = 'rightTriangle'/> 
        <div className = 'rightLine'/>     
        <Application />
      </div>
    </Provider>
  );
};

// <Application />


export const indexStore = configureStore();
//store.dispatch(getAllCategory());

ReactDOM.render(<Root store={indexStore} />, document.getElementById(
  'root'
) as HTMLElement);

/* ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
