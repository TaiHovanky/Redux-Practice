export default function reducer(state={inputStr: null}, action) {
  if (action.type === "CREATE_DISCUSSION") {
    return {...state, inputStr: action.payload}
  }
  return state;
}

//4) set up the discussionReducer that was referenced in store.js
//if a change is made to the input, the state is updated