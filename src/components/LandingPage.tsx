import React from 'react';
import Logo from '../logo.png'

function LandingPage() {
    return (
      <div className="LandingPage">
                            <img src={Logo} alt="logo" id="logo"/>
                    <h4 id="tag-line">Connect, share, showcase projects, and get hired!</h4>
                    <form>

                        <div id="landing-page-input">
                            <input type='text' id="firstname" name="firstName" placeholder='First Name' ></input>
                            <input type='text' id="lastname" name="lastName" placeholder='Last Name'></input>
                            <button type="submit" className="button">Submit</button>
                        </div>
                </form>
      </div>
    );
  }
  
  export default LandingPage;