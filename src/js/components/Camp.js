import React from 'react'
import { connect } from 'react-redux'
import { createComment } from '../actions/commentActions'

@connect((store) => {
  return {
    comments: store.comment.comments
  };
})

export default class Camp extends React.Component {
  makeComment(e) {
    var comment = this.refs.comment.value;
    this.props.dispatch(createComment(comment))
  }

  render() {
    const { comments } = this.props;
    var mappedComments = '';
    if(comments){
      mappedComments = comments.map(comment => <li>{comment}</li>)
    }
    return <div>
    <ul>{mappedComments}</ul>
    <label>Reply</label>
    <input className='commentField' ref='comment'></input>
    <button onClick={this.makeComment.bind(this)}>Post</button>
    </div>
  }
}