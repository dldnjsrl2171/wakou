import { createStore } from 'redux';
import ModalReducer from './Reducer/ModalReducer'; 
const rootReducer = ModalReducer;
const Store = createStore(rootReducer);

export default Store;
