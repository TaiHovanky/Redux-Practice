import React, { PropTypes } from 'react'
import Discussion from './Discussion'

export default class DiscussionList extends React.Component{
  render(){
    console.log('this', this);
    let thisObj = this;
    return (
      <ul>
        {thisObj.props.discussions.map(discussion =>
          <Discussion 
            key={discussion.id}
            {...discussion}
            camps={this.props.camps}
            // onClick={() => onCreateDiscussion(discussion)}
          />  
        )}
      </ul>
    )
  }
}