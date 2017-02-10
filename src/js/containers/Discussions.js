import { connect } from 'react-redux'
import { createDiscussion, createCamp, createComment } from '../actions/actions'
import DiscussionList from '../components/DiscussionList'

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    discussions: state.discussions
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onCreateDiscussion: (inputStr) => {
//       dispatch(createDiscussion(inputStr))
//     }
//   }
// }

const Discussions = connect(
  mapStateToProps,
  // mapDispatchToProps
)(DiscussionList)

export default Discussions