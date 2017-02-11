import React from 'react'
import Camp from './Camp'
import AddCamp from '../containers/AddCamp'
import Camps from '../containers/Camps'

class CampParent extends React.Component{
  render(){
    return (<div>
      <AddCamp discussionId={this.props.discussionId} />
      <Camps discussionId={this.props.discussionId} camps={this.props.camps} />
    </div>)
  }
}

export default CampParent