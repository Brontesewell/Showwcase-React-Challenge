

import {  
  SET_LAST_NAME, 
  SET_FIRST_NAME,   
  SET_EDUCATION,
  DELETE_STUDY,
  SET_SELECTED_EDUCATION,
  EducationState,
  CLEAR_SELECTED_EDUCATION,
  ShowwcaseActionTypes} from './types';

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