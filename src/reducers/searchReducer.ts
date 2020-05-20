import {
  ShowwcaseState,
  ShowwcaseActionTypes,
  SET_LAST_NAME,
  SET_FIRST_NAME,
  SET_EDUCATION,
  DELETE_STUDY,
  FETCH_ALL_SCHOOLS,
  CLEAR_ALL_SCHOOLS,
  CLEAR_SELECTED_EDUCATION,
  SET_SELECTED_EDUCATION,
} from '../actions/types';

const initialState: ShowwcaseState = {
    firstName: '',
    lastName: '',
    searchSchools: [],
    education: [],
    selectedEducation: null
};

export default function showwcaseReducer(
  state = initialState, 
  action: ShowwcaseActionTypes): ShowwcaseState{
  switch (action.type) {

    case SET_LAST_NAME:
      return {...state, lastName: action.data}

    case SET_FIRST_NAME:
      return {...state, firstName: action.data}

      case SET_EDUCATION:
        const newArr = state.education.concat(action.data)
        return {...state, education: newArr}

    case FETCH_ALL_SCHOOLS:
      return { ...state, searchSchools: action.data};

    case CLEAR_ALL_SCHOOLS:
          return { ...state, searchSchools: null};

    case DELETE_STUDY:
      const deletedArray = state.education.filter(m => m !== action.data)
      return {...state, education: deletedArray}

    case SET_SELECTED_EDUCATION:
      return {...state, selectedEducation: action.data}

    case CLEAR_SELECTED_EDUCATION:
        return {...state, selectedEducation: null}

    default:
      return state;
  }
}
