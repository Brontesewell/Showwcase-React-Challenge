import React from 'react'
import Modal from './Modal/Modal'
import Backdrop from './Backdrop/Backdrop'
import EducationCard from './EducationCard'
import { connect } from 'react-redux'
import {
    setEducation,
    setSelectedEducation,
    clearSelectedEducation,
} from '../actions/showwcaseActions';
import styled from 'styled-components'
import { color, ColorProps } from 'styled-system'

interface Props {
    setEducation: typeof setEducation,
    selectedEducation: any
    setSelectedEducation: typeof setSelectedEducation,
    clearSelectedEducation: typeof clearSelectedEducation,
    education: any,
}

interface State {
    openModal: Boolean, 
    school: string; 
    degree: string; 
    // \/ Array<string>
    awards: any;
    startYear: string; 
    endYear: string; 
    grade: string;
    description: string;
    schoolsSearch: any;
    loading: Boolean
}

const Button = styled.button<ColorProps>`
  ${color}
`
const LeftColumn = styled.div`
    float: left;
    width: 26%;
    padding: 5px;
    background-color: #a6a6a6;
    min-height: 500px;
    margin-left: 5%;
    margin-bottom: 100px;
`;

const RightColumn = styled.div`
    float: right;
    width: 60%;
    padding: 5px;
    background-color: #a6a6a6;
    min-height: 500px;
    margin-right: 5%;
    margin-bottom: 100px;
`;
  

class EducationList extends React.Component<Props, State> {

    constructor(props: Props) {
      super(props);
      this.state = {
        openModal: false, 
        awards: [],
        degree: '',
        description: '',
        endYear: '',
        school: '',
        startYear: '',
        grade: '', 
        schoolsSearch: [],
        loading: false
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
        this.props.setSelectedEducation(Education)
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

    handleSchoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const schoolInput = e.target.value
        this.fetchAllSchools(schoolInput)
        this.setState({
            school: schoolInput,
            loading: true,
        })
    }


    fetchAllSchools = (subject: string) => {
        fetch(`http://universities.hipolabs.com/search?name=${subject}`)
        .then(res => res.json())
        .then((data: any) => {
                this.setState({
                    schoolsSearch: data,
                    loading: false
                })
          }
        )
        .catch(err => console.log(err));
    };


    handleClickedSchool = (clickedSchool: any) => {
        (document.getElementById("school") as HTMLInputElement).value = clickedSchool.name;
        this.setState({
          school: clickedSchool.name,
          schoolsSearch: []
        })
    }
  
  
    setSelectedEducation = (clickedEducation: Object) => {
          this.props.setSelectedEducation(clickedEducation)
    };

    createEducationHandler = () => {
        this.setState({ openModal: true });
    };
  
    modalCancelHandler = () => {
        this.props.clearSelectedEducation()
        this.setState({ 
            openModal: false,
            awards: [],
            degree: "",
            description: "",
            endYear: "",
            school: "",
            startYear: "",
            grade: "",
        });
    };
  
    clearSelectedEducation = () => {
          this.props.clearSelectedEducation()
    };
      
    render() {

        return (
            <div className="EducationList">
                <div className="row">
              
                    <LeftColumn>
                        <h2 id="education-title">Education</h2>
                        {this.props.selectedEducation !== null ? <Button type="submit" color="white" bg="black" className="button" id="new-education-btn" onClick={this.createEducationHandler}>Add New Education</Button> : null}
                        {this.props.education.map((education: any) => <h3 id="side-nav-titles" onClick={() => this.setSelectedEducation(education)}>{education.school}</h3> ).reverse()}
                    </LeftColumn> 

                    <RightColumn>
                        { this.props.selectedEducation == null ? <div className="welcome-title-box"><h1>Welcome to Showwcase</h1><h4><i>Let's Get Started ↓</i></h4><Button type="submit" color="white" bg="black" className="button" onClick={this.createEducationHandler}>Add New Education</Button></div> 
                        : <EducationCard clearSelectedEducation={this.clearSelectedEducation}/> } 
                    
                    
                    {(this.state.openModal ) && <Backdrop />}
                    {this.state.openModal && (<Modal
                        title="Add Education"
                        onCancel={this.modalCancelHandler}
                        onConfirm={this.onConfirmClick}
                        confirmText="Confirm"
                        >
                        <form>

                            {/* School Search Input + Label */}
                            <div className="form-control">
                                  <label htmlFor="school">School: </label>
                                  <input type="text" name="school" id="school" onChange={this.handleSchoolChange} />
                                  <div className="schools-dropdown">{this.state.loading ? <div className="loader"></div> : (this.state.schoolsSearch.slice(0, 10)).map((i: any) => <p className="school-select" onClick={() => this.handleClickedSchool(i)}>{i.name}</p>)}</div>
                            </div>

                            {/* Degree Input + Label */}
                            <div id="degree-input-div" className="form-control">
                                <label htmlFor="degree">Degree: </label>
                                <input type="text" name="degree" onChange={this.onHandleChange}/>
                            </div>

                            {/* Grade Input + Label */}
                            <div className="form-control">
                                <label htmlFor="grade">Average Grade: </label>
                                <input type="text" name="grade" placeholder='e.g. 98%' onChange={this.onHandleChange}/>
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
                                <textarea id="description-input" name="description" placeholder='write your description here....' onChange={this.onDescriptionChange}/>
                            </div>

                            </form>

                            {/* Awards Input + Label */}
                            <div className="awards-form-control">    
                                <form onSubmit={this.addAwardsClick}>
                                <label htmlFor="awards">Awards: </label>
                                <br></br>
                                <input type="text" name="awards" id="awards"/>
                                <button id="add-awards" type="submit" >Add</button>
                                </form>
                                {this.state.awards.length > 0 ? this.state.awards.map((i:any) => (<a>{i.text}, </a>)): null}
                            </div>
                    </Modal>)}
            
            </RightColumn>
        </div>

      </div>
    );
  }
}
  
const mapStateToProps = (state: any) => ({
    education: state.showwcase.education,
    selectedEducation: state.showwcase.selectedEducation
});
  
  
export default connect(mapStateToProps,
    { setEducation, clearSelectedEducation, setSelectedEducation}
)(EducationList);