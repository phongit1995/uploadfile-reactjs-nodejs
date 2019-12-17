import React ,{Component} from 'react' ;
import ReactDom from 'react-dom' ;
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import appReducers  from './reducers/index';
const store = createStore(appReducers);

ReactDom.render( <Provider store={store}><App/></Provider> ,
document.getElementById('root'));