import { SET_CURRENT_USER, 
  SET_LAST_NAME, 
  SET_FIRST_NAME,   
  SET_EDUCATION,
  FETCH_ALL_SCHOOLS,
  CLEAR_ALL_SCHOOLS,
  DELETE_STUDY,
  ShowwcaseActionTypes} from './types';

import axios from 'axios';


export function fetchAllSchools(subject: String): ShowwcaseActionTypes{
  axios
  .get(`http://universities.hipolabs.com/search?name=${subject}`)
  .then(response => {
    return { 
      type: FETCH_ALL_SCHOOLS, 
      data: response.data 
      }
    }
  )
  .catch(err => console.log(err));
};
  
export function clearSchoolSearch(): ShowwcaseActionTypes {
  return{ type: CLEAR_ALL_SCHOOLS, data: null };
};

export function deleteStudy (study: Object): ShowwcaseActionTypes {
  return{ 
    type: DELETE_STUDY, 
    data: study
  };
};

export function setLastName(user: string): ShowwcaseActionTypes {
  return{ type: SET_LAST_NAME, data: user};
}

export function setFirstName(user: string): ShowwcaseActionTypes {
  return{ type: SET_FIRST_NAME, data: user};
}

export function setEducation(user: any): ShowwcaseActionTypes {
  return{ type: SET_EDUCATION, data: user};
}
