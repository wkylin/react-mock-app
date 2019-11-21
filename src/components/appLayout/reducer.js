import * as ActionTypes from './action';

const initialState = {
  data: {},
  loading: false
};

function dataFetch(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.DATA_FETCH.REQUEST:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.DATA_FETCH.SUCCESS:
      return {
        ...state,
        data: action.data.data,
        loading: false
      };
    case ActionTypes.DATA_FETCH.FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export default dataFetch;
