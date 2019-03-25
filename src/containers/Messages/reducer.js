import * as actionTypes from './constants';
const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case (actionTypes.NEW_MESSAGE): {
      console.log('got it ', action.payload);
      return [ ...state, action.payload ];
    }
    default: {
      return state;
    }
  }
}
