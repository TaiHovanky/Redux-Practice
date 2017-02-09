export function createDiscussion(inputStr) {
  return {
    type: 'CREATE_DISCUSSION',
    payload: inputStr
  }
}

//6) create the discussion action. This gets dispatched if user inputs a discussion