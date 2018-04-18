import React from 'react';
import SearchBar from '../components/searchBar/';
import Results from '../components/Results/';
import History from '../components/History';

export default class App extends React.Component {
  render() {
    return (
      //title page
    <div>
      <div className='jumbotron'>
          <h1 className='page-title' id="page-title">Weather App</h1>
          <p className='page-description' id="page-description">Always know if you need an umbrella!</p>
          </div>
      
      <SearchBar />
      <div className="row col-md">
      <div className="col-md-6">
      <Results />
      </div>
      <div className="col-md-6">
      <History />
      </div>
      </div>
      </div>
    
    );
  }
}
