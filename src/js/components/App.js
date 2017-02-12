import React from 'react'
import Discussion from './Discussion'
import AddDiscussion from '../containers/AddDiscussion'
import DiscussionList from '../containers/DiscussionList'
import { getDiscussions } from '../actions/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

DiscussionList.need = [
  getDiscussions
]

class App extends React.Component{
  render(){
    return (<div>
      <AddDiscussion />
      <DiscussionList />
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articleGet.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(getDiscussions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)