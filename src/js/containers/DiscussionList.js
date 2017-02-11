import React, { PropTypes } from 'react'
import Discussion from '../components/Discussion'
import { connect } from 'react-redux'

class DiscussionList extends React.Component{
  render(){
    let thisObj = this;
    return (
      <ul>
        {thisObj.props.discussions.map(discussion =>
          <Discussion 
            key={discussion.id}
            discussionId={discussion.id}
            {...discussion}
          />  
        )}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    discussions: state.discussions
  }
} //all we need is the state.discussions array to pass into the DiscussionList as props
//DiscussionList then displays the discussions

export default connect(mapStateToProps)(DiscussionList)