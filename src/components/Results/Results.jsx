import React from 'react';

export default class Results extends React.Component {
    constructor(props){
        super(props);
    }
 
    render() {
        const { results } = this.props;
        console.log('test', results)
        // if(!result) {
        //     return <div>Please Select a City</div>
        // }
        return (
            <div className="card">
                <div className="class-header" id="results-name">{!!results.name ? results.name : "Select a City"}
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <h5 id="h5-tag">Temperature (F)</h5>
                    <div id="div-tag-temperature">{!!results.main ? results.main.temp + '(F)' : "0"}</div>
                    </div>
                    <div className="col-md-4">
                    <h5 id="h5-tag-one">Pressure</h5>
                    <div id="div-tag-pressure">{!!results.main ? results.main.pressure + '(Psi)' : "0"}</div>
                    </div>
                    <div className="col-md-4">
                    <h5 id="h5-tag-two">Humidity</h5>
                    <div id="div-tag-humidity">{!!results.main ? results.main.humidity + '(H)' : "0"}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h5 id="h5-tag-row-two">Lowest Temp (F)</h5>
                        <div id="div-tag-lowesttemp">{!!results.main ? results.main.temp_min + '(F)': "0"}</div>
                    </div>
                    <div className="col-md-4">
                    <h5 id="h5-tag-row-two-one">Highest Temp</h5>
                    <div id="div-tag-highesttemp">{!!results.main ? results.main.temp_max + '(F)' : "0"}</div>
                    </div>
                    <div className="col-md-4">
                    <h5 id="h5-tag-row-two-two">Wind Speed</h5>
                    <div id="div-tag-windspeed">{!!results.main ? results.wind.speed + '(mph)   ' : "0"}</div>
                </div>
            </div>
            </div>
        )
    }
};