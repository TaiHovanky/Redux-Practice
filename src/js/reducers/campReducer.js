export default function reducer(state={ camps: []}, action) {
  if(action.type === "SET_CAMP") {
    return {...state, camps: [...state.camps, action.payload]}
  }
  return state;
}