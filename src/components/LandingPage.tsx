import React, { useState } from "react";
// import React from 'react';
import Logo from '../logo.png'
import { connect } from 'react-redux'
import {
  setFirstName,
  setLastName,
} from '../actions/showwcaseActions';
import { History } from 'history';
import styled from 'styled-components'
import { color, ColorProps } from 'styled-system'

interface StateProps {
  firstName: string,
  lastName: string,
  setLastName: typeof setLastName,
  setFirstName: typeof setFirstName,
  history : History
}

const Button = styled.button<ColorProps>`
${color}
`;
const FirstNameInput = styled.input`
      padding: 10px;
      border-radius: 5px;
      border-color:  #555555;
      font-size: 15px;
`;

const LastNameInput = styled.input`
      padding: 10px;
      margin-left: 5px;
      margin-right: 19px;
      border-radius: 5px;
      border-color:  #555555;
      font-size: 15px;
`;


  function LandingPage(props: StateProps) {
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              props.setFirstName(firstName)
              props.setLastName(lastName)
              props.history.push('/profile')
    };

      return (
             <div className="LandingPage">
                    <img src={Logo} alt="logo" id="logo"/>
                    <h4 id="tag-line">Connect, share, showcase projects, and get hired!</h4>
                    <form onSubmit={handleSubmit}>

                        <div id="landing-page-input">
                            <FirstNameInput type='text' name="firstName" placeholder='First Name' value={firstName} onChange={e => setFName(e.target.value)}></FirstNameInput>
                            <LastNameInput type='text' name="lastName" placeholder='Last Name' value={lastName} onChange={e => setLName(e.target.value)}></LastNameInput>
                            <Button type="submit" color="white" bg="black" className="button">Submit</Button>
                        </div>
                </form>
      </div>
      );
    }
    
    const mapStateToProps = (state: any) => ({
      firstName: state.showwcase.firstName,
      lastName: state.showwcase.lastName, 
    });  
    
    
    export default connect(
      mapStateToProps,
      { setFirstName, setLastName }
    )(LandingPage);