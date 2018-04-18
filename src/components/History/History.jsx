// import React from 'react';
// import moment from 'moment';

// export default class History extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { history } = this.props;
//     return (
//       <div className='card'>
//         <div className='card-header'>History</div>
//         <div className='card-body'>
//           <div id="history">{history}</div>
//         </div>

//       </div>
//     );
//   }
// }

import React from 'react';
import moment from 'moment';

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { historys } = this.props;
    return (
      <div className='card'>
        <div className='card-header'>History</div>
        <div className='card-body'>
        
        {historys.length > 0 &&
          historys.map((history, index) => {
            console.log("what is this", history)
            return (
              <div key={index}>
              <p>{ history.CityInput }</p>
              <p>{ history.date }</p>
              </div>
            )
           })
        }
        </div>
      </div>
    );
  }
}


