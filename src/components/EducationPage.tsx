import React from 'react';
import { connect } from 'react-redux'
import Logo from '../logo.png'
import EducationList from './EducationList'
import { History } from 'history';
import styled from 'styled-components'

interface StateProps {
  firstName: string,
  lastName: string,
  history : History
}

const WelcomeText = styled.h3`
      margin-top: 5%;
      text-align: center;
`;



function EducationPage(props: StateProps) {
  const {firstName, history, lastName} = props
    return (
      <div className="EducationPage">
        <img src={Logo} alt="logo" id="logo-profile"/>
        {firstName === "" ? history.push('/') :  <WelcomeText  id="welcome">Welcome to {firstName} {lastName}'s Education Page</WelcomeText >}
        <EducationList />
      </div>
    );
  }
  
  const mapStateToProps = (state: any) => ({
    firstName: state.showwcase.firstName,
    lastName: state.showwcase.lastName,
  });
  
  
  export default connect(mapStateToProps, null)(EducationPage);