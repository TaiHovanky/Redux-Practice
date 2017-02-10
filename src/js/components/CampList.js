import React, { PropTypes } from 'react'
import Camp from './Camp'

export default class DiscussionList extends React.Component{
  render(){
    return (
      <ul>
        {this.props.camps.map(camp =>
          <Camp 
            key={camp.id}
            {...camp}
            // onClick={() => onCreateDiscussion(discussion)}
          />
        )}
      </ul>
    )
  }
}