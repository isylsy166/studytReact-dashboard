const initialState = { text: '' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.text, id: action.id};
    default:
      return state;
  }
};

export default reducer;