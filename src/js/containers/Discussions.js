import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createDiscussion, createCamp, createComment } from '../actions/actions'
import DiscussionList from '../components/DiscussionList'

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    discussions: state.discussions,
    camps: state.camps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    createDiscussion: createDiscussion, 
    createCamp: createCamp}, dispatch)
} 

const Discussions = connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscussionList)

export default Discussions