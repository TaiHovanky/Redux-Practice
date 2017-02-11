// singular camp component - just presentational
import React from 'react'
import CampList from '../containers/CampList'

const Camp = ({inputStr, key}) => (
  <li>
    <h3>{inputStr}</h3>
  </li>
)

export default Camp