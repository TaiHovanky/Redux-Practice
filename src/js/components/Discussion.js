import React from 'react'
import CampParent from './CampParent'
import DiscussionList from './DiscussionList'

const Discussion = ({ onCreateCamp, inputStr, id, camps }) => (
  <li>
    <h3>{inputStr}</h3>
    <CampParent discussionId={id} camps={camps} />
  </li>
)

export default Discussion