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
                ></Modal>)}
        
        </div>

      </div>
    );
  }
}
  
  export default EducationList;