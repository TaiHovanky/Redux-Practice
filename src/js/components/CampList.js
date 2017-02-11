import React, { PropTypes } from 'react'
import Camp from './Camp'

export default class CampList extends React.Component{
  render(){
    var currCamps = this.props.camps.filter(camp => {
      return camp.discussionId === this.props.discussionId
    });
    return (
      <ul>
        {currCamps.map(camp =>
          <Camp key={camp.id}
            {...camp}
            // onClick={() => onCreateDiscussion(discussion)} {...camp}
          />
        )}
      </ul>
    )
  }
}