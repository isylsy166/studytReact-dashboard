import { createStore } from 'redux';

const initialState = {
    count: 0,
    writer: []
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'INCREMENT':
      return { ...state, count: state.count + 1 };

    case 'ADD_BOARD':

     
        return { ...state, boards: [...state.boards, boards] };

    case 'LOAD_BOARDS':
        return { ...state, boards: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer);