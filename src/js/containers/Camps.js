import { connect } from 'react-redux'
import { createCamp } from '../actions/actions'
import CampList from '../components/CampList'

const getCorrectCamps = (camps, filter, discussionId) => {
  console.log('discussionId', discussionId, 'camp', camp)
  return camps.filter(camp => camp.discussionId === discussionId)
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    camps: state.camps
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onCreateDiscussion: (inputStr) => {
//       dispatch(createDiscussion(inputStr))
//     }
//   }
// }

const Camps = connect(
  mapStateToProps,
  // mapDispatchToProps
)(CampList)

export default Camps