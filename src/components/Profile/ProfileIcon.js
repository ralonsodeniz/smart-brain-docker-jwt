import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class ProfileIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  cleanTokenOnSignout = () => {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3001/signout", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      })
        .then(resp => resp.json())
        .then(removedToken => {
          if (removedToken === 1) {
            window.sessionStorage.removeItem("token");
          }
        });
    }
    this.props.onRouteChange("signout");
  };

  toggle = () => {
    this.setState(prevState => ({
      // this is the correct way to togle a state using the callback function of setstate
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <div>
              <img
                src="http://tachyons.io/img/logo.jpg"
                className="br-100 ba h3 w3 dib"
                alt="avatar"
              />
            </div>
          </DropdownToggle>
          <DropdownMenu className="bg-white-50 shadow-5" right>
            <DropdownItem onClick={() => this.props.toogleModal()}>
              View Profile
            </DropdownItem>
            <DropdownItem onClick={() => this.cleanTokenOnSignout()}>
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
export default ProfileIcon;
