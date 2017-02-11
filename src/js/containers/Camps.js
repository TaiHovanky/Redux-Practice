import { connect } from 'react-redux'
import { createCamp } from '../actions/actions'
import CampList from '../components/CampList'
import {bindActionCreators} from 'redux'

// const getCorrectCamps = (camps, filter, discussionId) => {
//   console.log('discussionId', discussionId, 'camp', camp)
//   return camps.filter(camp => camp.discussionId === discussionId)
// }

//const mapStateToProps = (state) => {
//   console.log('state', state);
//   return {
//     camps: state.cs
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     bindActionCreators({createCamp: createCamp}, dispatch)
//   }
// } //pass the createCamp function as props into the Camp items

const Camps = connect(
  //mapStateToProps,
  //mapDispatchToProps
)(CampList)

export default Camps