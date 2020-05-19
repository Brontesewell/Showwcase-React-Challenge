import React from 'react'
import Modal from './Modal/Modal'
import Backdrop from './Backdrop/Backdrop'
interface IProps {
}

interface IState {
    openModal: Boolean, 
    selectedEducation: null,
    awards: any,
    degree: String,
    description: String,
    endyear: String,
    school: String,
    startyear: String,
    grade: String,
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
        endyear: '',
        school: '',
        startyear: '',
        grade: '', 
      };
    }

    onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        this.setState({
            school: newValue
        })
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
        const { awards, degree, description, endyear, school, grade, startyear} = this.state
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
                confirmText="Confirm"
                >
                     <form >

                            {/* School Search Input + Label */}
                            <div className="form-control">
                            <label htmlFor="school">School: </label>
                            <input type="text" name="school" />
                            {/* <p>{this.props.searchSchools ? (this.props.searchSchools.slice(0, 10)).map(i => <p className="school-select" onClick={() => this.handleClickedSchool(i)}>{i.name}</p>) : null}</p> */}
                            </div>

                            {/* Degree Input + Label */}
                            <div className="form-control">
                            <label htmlFor="degree">Degree: </label>
                            <input type="text" name="degree" />
                            </div>

                            {/* Grade Input + Label */}
                            <div className="form-control">
                            <label htmlFor="grade">Average Grade: </label>
                            <input type="text" name="grade" placeholder='e.g. 98%'/>
                            </div>

                            {/* Awards Input + Label */}
                            <div className="form-control">    
                            {/* <form onSubmit={this.addAwardsClick}> */}
                            <label htmlFor="awards">Awards: </label>
                            <input type="text" name="awards" />
                            <button id="add-awards" type="submit">Add</button>
                            {/* </form>
                            {this.state.awards.length > 0 ? this.state.awards.map(i => <a>{i.text}, </a>): null} */}
                            </div>

                            {/* Start Yr Input + Label */}
                            <div className="form-control">
                            <label htmlFor="date">Start Year: </label>
                            <input type="text" name="startyear" placeholder='e.g. August 2019'  />
                            </div>

                            {/* End Yr Input + Label */}
                            <div className="form-control">
                            <label htmlFor="date">End Year: </label>
                            <input type="text" name="endyear" placeholder='e.g. August 2019'   />
                            </div>

                            {/* Description Yr Input + Label */}
                            <div className="form-control">
                            <label htmlFor="description">Description: </label>
                            <textarea name="description"  />
                            </div>

                            </form>

                </Modal>)}
        
        </div>

      </div>
    );
  }
}
  
  export default EducationList;