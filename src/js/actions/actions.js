let discussionId = 0
let campId = 0
let commentId = 0
let upvoteId = 0
//these IDs are used to identify the camp that a discussion belongs to (for example)

export function createDiscussion(inputStr) {
  return {
    type: 'CREATE_DISCUSSION',
    id: discussionId++,
    inputStr
  }
}

export function createCamp(discussionId, inputStr) {
  return {
    type: 'SET_CAMP',
    campId: campId++,
    discussionId: discussionId,
    inputStr
  }
}

export function selectCamp(campId) { //function is 'action creator'
  console.log('you clicked on camp', campId);
  return {//object that gets returned is the 'action'
    type: 'CAMP_SELECTED',
    campId
  }
}

export function createComment(campId, inputStr) {
  return {
    type: 'MAKE_COMMENT',
    commentId: commentId++,
    campId: campId,
    inputStr
  }
}

export function createUpvote() {
  return {
    type: 'CREATE_UPVOTE_COUNTER',
    upvoteId: upvoteId++,
    count: 0
  }
}

export function increaseUpvotes(commentId) {
  return {
    type: 'UPVOTE',
    commentId: commentId
  }
}

export function increaseDownvotes() {
  return {
    type: 'DOWNVOTE'
  }
}