import moment from 'moment';

const defaultState = {
  results: {},
  historys: []
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    // Here in the case of the update description action 
    case 'UPDATE_CITY_INPUT_FULFILLED': {
      // we'll return an object
      console.log("payload.data=", payload.data)
      return {
        // with all the previous state
        ...state,
        // but overwriting the description
        results: payload.data
        
      };
    }



    case 'ADD_HISTORY': {

      console.log("historys", payload.CityInput)
      return {
        ...state, 
        historys: [
          // here we have all the previous line items
          ...state.historys,
          // plus a new object
          payload
        ]
      };
    }

    default: {
      return state;
    }
  }
}