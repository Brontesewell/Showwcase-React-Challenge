import React from 'react'

function EducationList() {

    const createEducationHandler = () =>{

    }

    return (
      <div className="EducationList">
        <div className="row">
              
              <div className="left-column">
               <h2 id="education-title">Education</h2>
               <button id="new-education-btn" className="button" onClick={createEducationHandler} >Add new Education</button> 
                 
              </div>

              <div className="right-column">
                <div className="welcome-title-box"><h1>Welcome to ShowwCase</h1><button className="button" onClick={createEducationHandler} >Add My Education</button></div> 
            </div>
        
        </div>

      </div>
    );
  }
  
  export default EducationList;