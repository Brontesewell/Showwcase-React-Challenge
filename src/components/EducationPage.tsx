import React from 'react';
import { connect } from 'react-redux'
import Logo from '../logo.png'
import EducationList from './EducationList'


function EducationPage() {
    return (
      <div className="EducationPage">
        <img src={Logo} alt="logo" id="logo-profile"/>
        <h3 id="welcome">Welcome to firstname lastname's Education Page</h3>
        <EducationList />
      </div>
    );
  }
  
  export default EducationPage;