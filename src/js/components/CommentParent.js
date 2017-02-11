import React from 'react'
import Comment from './Comment'
import AddComment from '../containers/AddComment'
import CommentList from '../containers/CommentList'

class CommentParent extends React.Component{
  render(){
    console.log('campId', this.props.campId)
    return (<div>
      <AddComment campId={this.props.campId} />
      <CommentList campId={this.props.campId} />
    </div>)
  }
}

export default CommentParent