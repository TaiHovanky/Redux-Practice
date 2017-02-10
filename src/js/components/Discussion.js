import React from 'react'
import CampParent from './CampParent'

const Discussion = ({ onCreateCamp, inputStr, id }) => (
  <li>
    <h3>{inputStr}</h3>
    <CampParent discussionId={id} />
  </li>
)

export default Discussion