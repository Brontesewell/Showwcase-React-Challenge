import React from 'react'
import Modal from './Modal/Modal'
import Backdrop from './Backdrop/Backdrop'
import { connect } from 'react-redux'
import {
    setEducation,
    // fetchAllSchools,
    clearSchoolSearch,
} from '../actions/showwcaseActions';
// import EducationState from '../actions/types'

interface IProps {
    setEducation: typeof setEducation,
    clearSchoolSearch: typeof clearSchoolSearch,
    education: object,
    searchSchools: []
}

interface IState {
    openModal: Boolean, 
    selectedEducation: null,
    school: string; 
    degree: string; 
    startYear: string; 
    endYear: string; 
    awards: any;
    grade: string;
    description: string;
}

class EducationList extends React.Component<IProps, IState> {

    constructor(props: IProps) {
      super(props);
      this.state = {
        openModal: false, 
        selectedEducation: null,
        awards: [],
        degree: '',
        description: '',
        endYear: '',
        school: '',
        startYear: '',
        grade: '', 
      };
      this.addAwardsClick = this.addAwardsClick.bind(this)
    }



  addAwardsClick(e: React.FormEvent<HTMLFormElement>) {
      let awardsValue = (document.getElementById("awards") as HTMLInputElement).value;
      if (awardsValue!== "") {
            var newAward = {
                text: awardsValue,
                key: Math.random()
            }; 
          console.log(newAward)
          this.setState((prevState) => {
             return { 
              awards:  prevState.awards.concat(newAward)
              };
          });
          (document.getElementById("awards") as HTMLInputElement).value = "";
       }
      e.preventDefault();
  }

  onConfirmClick =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const Education = {
        awards: this.state.awards,
        degree: this.state.degree,
        description: this.state.description,
        startYear: this.state.startYear,
        endYear: this.state.endYear,
        school: this.state.school,
        grade: this.state.grade
    }
    this.props.setEducation(Education)
    this.setState({
        openModal: false,
        awards: [],
        degree: "",
        description: "",
        endYear: "",
        school: "",
        startYear: "",
        grade: "",
    })
}


    onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.currentTarget.value;
            this.setState({
                description : newValue
            })
    }

    onHandleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const newValue = e.currentTarget.value;
        if (e.currentTarget.name === "school"){
            this.setState({
                school : newValue
            })
        } else if (e.currentTarget.name === "grade"){
            this.setState({
                grade : newValue
            })
        } else if (e.currentTarget.name === "startYear"){
            this.setState({
                startYear : newValue
            })
        } else if (e.currentTarget.name === "endYear"){
            this.setState({
                endYear : newValue
            })
        } else if (e.currentTarget.name === "degree"){
            this.setState({
                degree : newValue
            })
        }
    }

    createEducationHandler = () => {
        this.setState({ openModal: true });
      };
  
      modalCancelHandler = () => {
        this.setState({ openModal: false, selectedEducation: null });
      };
  
      clearSelectedEducation = () => {
          this.setState({ selectedEducation: null });
      };
      
    render() {
       console.log(this.props.education)
        const { awards, degree, description, endYear, school, grade, startYear} = this.state
    return (
      <div className="EducationList">
        <div className="row">
              
              <div className="left-column">
               <h2 id="education-title">Education</h2>
               <button id="new-education-btn" className="button" onClick={this.createEducationHandler} >Add new Education</button> 
                 
              </div>

              <div className="right-column">
                <div className="welcome-title-box"><h1>Welcome to ShowwCase</h1><button className="button" onClick={this.createEducationHandler} >Add My Education</button></div> 
            </div>
            {(this.state.openModal ) && <Backdrop />}
            {this.state.openModal && (<Modal
                title="Add Education"
                canCancel
                canConfirm
                onCancel={this.modalCancelHandler}
                onConfirm={this.onConfirmClick}
                confirmText="Confirm"
                >
                     <form>

                        {/* School Search Input + Label */}
                        <div className="form-control">
                        <label htmlFor="school">School: </label>
                        <input type="text" name="school" onChange={this.onHandleChange}/>
                        {/* <p>{this.props.searchSchools ? (this.props.searchSchools.slice(0, 10)).map(i => <p className="school-select" onClick={() => this.handleClickedSchool(i)}>{i.name}</p>) : null}</p> */}
                        </div>

                        {/* Degree Input + Label */}
                        <div className="form-control">
                        <label htmlFor="degree">Degree: </label>
                        <input type="text" name="degree" onChange={this.onHandleChange}/>
                        </div>

                        {/* Grade Input + Label */}
                        <div className="form-control">
                        <label htmlFor="grade">Average Grade: </label>
                        <input type="text" name="grade" placeholder='e.g. 98%' onChange={this.onHandleChange}/>
                        </div>

                        {/* Awards Input + Label */}
                        <div className="form-control">    
                        <form onSubmit={this.addAwardsClick}>
                        <label htmlFor="awards">Awards: </label>
                        <input type="text" name="awards" id="awards"/>
                        <button id="add-awards" type="submit" >Add</button>
                        </form>
                        {this.state.awards.length > 0 ? this.state.awards.map((i:any) => (<a>{i.text}, </a>)): null}
                        {/* <a>{i.text: string}, </a> */}
                        </div>

                        {/* Start Yr Input + Label */}
                        <div className="form-control">
                        <label htmlFor="date">Start Year: </label>
                        <input type="text" name="startYear" placeholder='e.g. August 2019'  onChange={this.onHandleChange}/>
                        </div>

                        {/* End Yr Input + Label */}
                        <div className="form-control">
                        <label htmlFor="date">End Year: </label>
                        <input type="text" name="endYear" placeholder='e.g. August 2019' onChange={this.onHandleChange} />
                        </div>

                        {/* Description Yr Input + Label */}
                        <div className="form-control">
                        <label htmlFor="description">Description: </label>
                        <textarea name="description" onChange={this.onDescriptionChange}/>
                        </div>

                        </form>

                </Modal>)}
        
        </div>

      </div>
    );
  }
}
  
const mapStateToProps = (state: any) => ({
    education: state.showwcase.education,
    searchSchools: state.showwcase.searchSchools,
  });
  
  
export default connect(mapStateToProps,
    { setEducation, clearSchoolSearch }
    )(EducationList);