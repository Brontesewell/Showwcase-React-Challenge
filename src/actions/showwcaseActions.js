// import { SET_CURRENT_USER, 
//   SET_LAST_NAME, 
//   SET_FIRST_NAME,   
//   SET_EDUCATION,
//   FETCH_ALL_SCHOOLS,
//   CLEAR_ALL_SCHOOLS,
//   DELETE_STUDY} from './types';

// import axios from 'axios';


// export const fetchAllSchools = (subject: String) => dispatch => {
//   axios
//   .get(`http://universities.hipolabs.com/search?name=${subject}`)
//   .then(response =>
//     dispatch({ type: FETCH_ALL_SCHOOLS, data: response.data })
//     )
//     .catch(err => console.log(err));
// };
  
// export const clearSchoolSearch = () => dispatch => {
//   dispatch({ type: CLEAR_ALL_SCHOOLS, data: null });
// };

// export const deleteStudy = (study: Object) => dispatch => {
//   dispatch({ type: DELETE_STUDY, data: study});
// };
  
// // export const setCurrentUser = (user: Object) => dispatch => {
// //   dispatch({ type: SET_CURRENT_USER, data: user});
// // }

// export const setLastName = (user: String) => dispatch => {
//   dispatch({ type: SET_LAST_NAME, data: user});
// }

// export const setFirstName = (user: String) => dispatch => {
//   dispatch({ type: SET_FIRST_NAME, data: user});
// }

// export const setEducation = (user: Object) => dispatch => {
//   dispatch({ type: SET_EDUCATION, data: user});
// }
