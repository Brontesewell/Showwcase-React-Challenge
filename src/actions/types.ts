export interface EducationState {
    school: string; 
    degree: string; 
    startYear: string; 
    endYear: string; 
    awards: any;
    grade: string;
    description: string;
}


export interface ShowwcaseState {
    firstName: string;
    lastName: string;
    searchSchools: any,
    education: EducationState[];
    selectedEducation: any
}


export const FETCH_ALL_SCHOOLS = 'FETCH_ALL_SCHOOLS';
export const DELETE_STUDY = 'DELETE_STUDY';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_EDUCATION = 'SET_EDUCATION';
export const CLEAR_ALL_SCHOOLS = 'CLEAR_ALL_SCHOOLS';
export const SET_SELECTED_EDUCATION = 'SET_SELECTED_EDUCATION';
export const CLEAR_SELECTED_EDUCATION = 'CLEAR_SELECTED_EDUCATION';


interface FetchAllSchoolsAction {
  type: typeof FETCH_ALL_SCHOOLS
  data: object
}

interface ClearSchoolSearchAction {
    type: typeof CLEAR_ALL_SCHOOLS
    data: null
}
    
interface DeleteStudyAction {
    type: typeof DELETE_STUDY
    data: Object
}

interface SetLastNameAction {
    type: typeof SET_LAST_NAME
    data: string
}

interface SetFirstNameAction {
    type: typeof SET_FIRST_NAME
    data: string
}
  
interface SetEducationAction {
    type: typeof SET_EDUCATION
    data: EducationState
}
  

interface SetSelectedEducationAction {
    type: typeof SET_SELECTED_EDUCATION
    data: any
}

interface ClearEducationAction {
    type: typeof CLEAR_SELECTED_EDUCATION
    data: null
}
  

export type ShowwcaseActionTypes = FetchAllSchoolsAction | ClearSchoolSearchAction | DeleteStudyAction | SetFirstNameAction | SetLastNameAction | SetEducationAction | SetSelectedEducationAction | ClearEducationAction