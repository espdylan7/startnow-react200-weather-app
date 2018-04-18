import { combineReducers } from 'redux';
import searchReducer from '../components/searchBar/searchReducer';
// import incomeReducer from './components/IncomeEntries/incomeReducer';

const rootReducer = combineReducers({
city: searchReducer

});

export default rootReducer;