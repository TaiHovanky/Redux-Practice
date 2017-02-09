export function createComment(inputStr) {
  return {
    type: 'MAKE_COMMENT',
    payload: inputStr
  }
}