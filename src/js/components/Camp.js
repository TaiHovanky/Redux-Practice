// singular camp component - just presentational
import React from 'react'
import CampList from './CampList'

const Camp = ({ onCreateComment, inputStr, id }) => (
  <li>
    <h3>{inputStr}</h3>
  </li>
)

export default Camp