import React from 'react'
import CommentList from '../containers/CommentList'
import Counter from './Counter'

const Comment = ({inputStr, commentId}) => (
  <li>
    <h4>{inputStr}</h4>
    <Counter commentId={commentId}/>
  </li>
)

export default Comment