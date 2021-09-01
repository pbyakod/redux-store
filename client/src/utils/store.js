// ADD: importing the neccesary packages to create our store
import { createStore } from 'redux';
import reducer from './reducers';
// ADD: exporting the store as a function to be used throughout the client
export default createStore(reducer);