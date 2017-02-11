import React from 'react'
import Discussion from './Discussion'
import AddDiscussion from '../containers/AddDiscussion'
import DiscussionList from '../containers/DiscussionList'

class App extends React.Component{
  render(){
    return (<div>
      <AddDiscussion />
      <DiscussionList />
    </div>)
  }
}

export default App