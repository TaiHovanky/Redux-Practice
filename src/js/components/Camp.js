// singular camp component - just presentational
import React from 'react'
import CampList from '../containers/CampList'
import CommentParent from './CommentParent'

const Camp = ({inputStr, key, campId}) => (
  <li>
    <h3>{inputStr}</h3>
    <CommentParent campId={campId} />
  </li>
)

export default Camp