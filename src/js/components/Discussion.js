//5) set up the component that uses the discussionReducer
import React from 'react'
import { connect } from 'react-redux'
import { createDiscussion } from '../actions/discussionActions' //6) need to make the action
import { createCamp } from '../actions/campActions'

@connect((store) => {
  return {
    discussion: store.discussion.inputStr, //this line comes from the ./reducers/index.js file
    camps: store.camp.camps
  };
}) //connect renders the component and connects redux code

export default class Discussion extends React.Component {
  sendInput(e) {
    var topic = this.refs.topic.value;
    this.props.dispatch(createDiscussion(topic))
  } //dispatches an action - in this case, createDiscussion

  setCamp(e) {
    var camp = this.refs.camp.value;
    this.props.dispatch(createCamp(camp))
  }

  render() {
    const { discussion, camps } = this.props;
    var mappedCamps = '';
    if(camps){
      mappedCamps = camps.map(camp => <li>{camp}</li>)
    }

    if(!discussion) {
      return <div>
      <label>Create a new Discussion</label>
      <input className='discussionField' ref='topic'></input>
      <button onClick={this.sendInput.bind(this)}>Create</button>
      <div className='commonMaker'>
        <label>Create a new Camp</label>
        <input className='commonField' ref='camp'></input>
        <button onClick={this.setCamp.bind(this)}>Set Camp</button>
      </div>
      </div>
    } else {
      return <div>
        <h3>{discussion}</h3>
        <div className='commonMaker'>
          <label>Create a new Camp</label>
          <input className='commonField' ref='camp'></input>
          <button onClick={this.setCamp.bind(this)}>Set Camp</button>
        </div>
        <ul>{mappedCamps || ""}</ul>
      </div>
    }
  }
}