import * as $ from './actions';
const initialState = {
  SLIDER: [],
  GET_SLIDER_REQUEST_STATUS: 0,
  GET_SLIDER_REQUEST_STATUS_MESSAGE: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case $.GET_SLIDER_REQUEST: {
      return {
        ...state,
        GET_SLIDER_REQUEST_STATUS: 1,
      };
    }
    case $.GET_SLIDER_REQUEST_SUCCESS: {
      return {
        ...state,
        GET_SLIDER_REQUEST_STATUS: 2,
        SLIDER: action.SLIDER,
      };
    }
    case $.GET_SLIDER_REQUEST_FAILURE: {
      return {
        ...state,
        GET_SLIDER_REQUEST_STATUS: 3,
        GET_SLIDER_REQUEST_STATUS_MESSAGE: action.MESSAGE,
      };
    }
    case $.GET_SLIDER_REQUEST_END: {
      return {
        ...state,
        GET_SLIDER_REQUEST_STATUS: 0,
      };
    }
    
    default:
      return state;
  }
};

export { reducer };
