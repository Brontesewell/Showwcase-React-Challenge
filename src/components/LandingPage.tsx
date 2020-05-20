import React from 'react';
import Logo from '../logo.png'
import { connect } from 'react-redux'
import {
  setFirstName,
  setLastName,
} from '../actions/showwcaseActions';
import { History } from 'history';
import styled from 'styled-components'
import { color, ColorProps, space } from 'styled-system'


interface StateProps {
  firstName: string,
  lastName: string,
  setLastName: typeof setLastName,
  setFirstName: typeof setFirstName,
  history : History
}

const Button = styled.button<ColorProps>`
  ${color}
`


class LandingPage extends React.Component<StateProps> {
    state = {
      firstName: "",
      lastName: ""
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.setFirstName(this.state.firstName)
        this.props.setLastName(this.state.lastName)
        this.props.history.push('/profile')
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
      const newValue = e.currentTarget.value;
      if (e.currentTarget.name === "firstName"){
          this.setState({
            firstName : newValue
          })
        } else if (e.currentTarget.name === "lastName") {
          this.setState({
            lastName : newValue
          })
      }
    }

    render() {
      const {firstName, lastName} = this.state
    return (
      <div className="LandingPage">
                    <img src={Logo} alt="logo" id="logo"/>
                    <h4 id="tag-line">Connect, share, showcase projects, and get hired!</h4>
                    <form onSubmit={this.handleSubmit}>

                        <div id="landing-page-input">
                        <input type='text' id="firstname" name="firstName" placeholder='First Name' value={firstName} onChange={this.handleChange}></input>
                            <input type='text' id="lastname" name="lastName" placeholder='Last Name' value={lastName} onChange={this.handleChange}></input>
                            <Button type="submit" color="white" bg="black" className="button">Submit</Button>
                        </div>
                </form>
      </div>
    );
    };
  };

  const mapStateToProps = (state: any) => ({
    firstName: state.showwcase.firstName,
    lastName: state.showwcase.lastName, 
  });
  
  export default connect(
    mapStateToProps,
    { setFirstName, setLastName }
  )(LandingPage);