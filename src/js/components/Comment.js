import React from 'react'
import CommentList from '../containers/CommentList'

const Comment = ({inputStr, key}) => (
  <li>
    <h4>{inputStr}</h4>
  </li>
)

export default Comment