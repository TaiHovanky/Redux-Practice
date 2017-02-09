export default function reducer(state={comments: []}, action) {
  if(action.type === 'MAKE_COMMENT') {
    return {
      ...state,
      comments: [...state.comments, action.payload]
    }
  }
  return state
}