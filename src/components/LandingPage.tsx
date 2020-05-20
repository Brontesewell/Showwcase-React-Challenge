import React from 'react';
import Logo from '../logo.png'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import {Link} from "react-router-dom";
import {
  setFirstName,
  setLastName,
} from '../actions/showwcaseActions';
import { History } from 'history';


interface StateProps {
  firstName: string,
  lastName: string,
  setLastName: typeof setLastName,
  setFirstName: typeof setFirstName,
  history : History
}


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
        } else 
        this.setState({
          lastName : newValue
        })
      }

    render() {
      console.log(this.props.firstName)
    return (
      <div className="LandingPage">
                    <img src={Logo} alt="logo" id="logo"/>
                    <h4 id="tag-line">Connect, share, showcase projects, and get hired!</h4>
                    <form onSubmit={this.handleSubmit}>

                        <div id="landing-page-input">
                        <input type='text' id="firstname" name="firstName" placeholder='First Name' value={this.state.firstName} onChange={this.handleChange}></input>
                            <input type='text' id="lastname" name="lastName" placeholder='Last Name' value={this.state.lastName} onChange={this.handleChange}></input>
                            <button type="submit" className="button">Submit</button>
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