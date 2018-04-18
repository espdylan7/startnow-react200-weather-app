import React from "react";

import { updateCityInput, addHistory } from "./searchActions";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CityInput: ""
    };
    this.handleCity = this.handleCity.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleCity(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    if (event.target.name === "city") {
      this.setState({ CityInput: value });
      dispatch(addHistory(value));
      dispatch(updateCityInput(value));
      return;
    }
    dispatch(updateCityInput(this.state.CityInput));
    dispatch(addHistory(this.state.CityInput));
  }

  handleInputChange(event) {
    const { value } = event.target;

    this.setState({ CityInput: value });
  }

  render() {
    //   const { searchPlace, searchInput } = this.props
    console.log("rendering searchbar");
    return (
      <div className="container">
        <ul className="nav nav-tabs">
          <li>
            <button
              className="btn btn-primary"
              id="a-one-tag"
              name="city"
              value="San Diego"
              onClick={this.handleCity}
            >
              San Diego
            </button>
          </li>
          <li>
            <button
              className="btn btn-primary"
              id="a-two-tag"
              name="city"
              value="New York"
              onClick={this.handleCity}
            >
              New York
            </button>
          </li>
          <li>
            <button
              className="btn btn-primary"
              id="a-three-tag"
              name="city"
              value="District of Columbia"
              onClick={this.handleCity}
            >
              Washington D.C
            </button>
          </li>
          <li>
            <button
              className="btn btn-primary"
              id="a-four-tag"
              name="city"
              value="London"
              onClick={this.handleCity}
            >
              London
            </button>
          </li>
          <li>
            <button
              className="btn btn-primary"
              id="a-five-tag"
              name="city"
              value="Tokyo"
              onClick={this.handleCity}
            >
              Tokyo
            </button>
          </li>
          <li>
            <i className="icon ion-ios-sunny-outline" />
            <i className="icon ion-cloud" />
          </li>
        </ul>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search City"
            aria-label="Search City"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" id="basic-addon2">
              Search
            </button>
          </div>
        </div>

        {/* <div className="form">
          <input className="form-control" id="search-city" type="texte" placeholder="Search" onChange={this.handleInputChange}/>
          <button className="btn btn-primary" id="button-element" onClick={this.handleCity}>Search</button>
          </div> */}
      </div>
    );
  }
}
