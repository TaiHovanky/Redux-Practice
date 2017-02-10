import React from 'react'
import Discussion from './Discussion'
import AddDiscussion from '../containers/AddDiscussion'
import Discussions from '../containers/Discussions'

class App extends React.Component{
  render(){
    return (<div>
      <AddDiscussion />
      <Discussions />
    </div>)
  }
}

export default App