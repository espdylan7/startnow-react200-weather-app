import { connect } from 'react-redux';
import searchBar from './searchBar';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {

  return {
    results: store.city.results,
    historys: store.city.historys
  };
}

//city?
export default connect(mapStoreToProps)(searchBar);