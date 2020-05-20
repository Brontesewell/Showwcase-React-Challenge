

import {  
  SET_LAST_NAME, 
  SET_FIRST_NAME,   
  SET_EDUCATION,
  FETCH_ALL_SCHOOLS,
  CLEAR_ALL_SCHOOLS,
  DELETE_STUDY,
  SET_SELECTED_EDUCATION,
  EducationState,
  CLEAR_SELECTED_EDUCATION,
  ShowwcaseActionTypes} from './types';

  import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import axios from 'axios';

  
export const fetchAllSchools = (subject: string) => {
      fetch(`http://universities.hipolabs.com/search?name=${subject}`)
  .then(res => res.json())
  .then((info: any) => {
    return { type: FETCH_ALL_SCHOOLS, data: info };
    }
  )
  .catch(err => console.log(err));
};



export function clearSchoolSearch(): ShowwcaseActionTypes {
  return{ 
    type: CLEAR_ALL_SCHOOLS, 
    data: null 
  };
};

export function deleteStudy (study: Object): ShowwcaseActionTypes {
  return{ 
    type: DELETE_STUDY, 
    data: study
  };
};

export function setLastName(user: string): ShowwcaseActionTypes {
  return{ 
    type: SET_LAST_NAME, 
    data: user
  };
}

export function setFirstName(user: string): ShowwcaseActionTypes {
  return{ 
    type: SET_FIRST_NAME, 
    data: user
  };
}

export function setEducation(educationObj: EducationState): ShowwcaseActionTypes {
  return{ 
    type: SET_EDUCATION, 
    data: educationObj
  };
}

export function setSelectedEducation(school: object): ShowwcaseActionTypes {
  return{ 
    type: SET_SELECTED_EDUCATION, 
    data: school
  };
}

export function clearSelectedEducation(): ShowwcaseActionTypes {
  return{ 
    type: CLEAR_SELECTED_EDUCATION, 
    data: null
  };
}