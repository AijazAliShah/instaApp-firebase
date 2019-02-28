import React, { Component } from "react";
import LeftSideBar from "./LeftSideBar";
import MainBody from "./MainBody";
import RightSideBar from "./RightSideBar";
import "../App.css";

class BodyContainer extends Component {
  render() {
    return (
      <div className="bodyContainer">
      
        <div className="leftContainer">
          <LeftSideBar links={this.props.links} userDetails={this.props.userDetails}/>
        </div>

        <div className="mainContainer">
          <MainBody userDetails={this.props.userDetails} pics={this.props.pics} />
        </div>

        <div className="rightContainer">
          <RightSideBar userDetails={this.props.userDetails}/>
        </div>
      </div>
    );
  }
}

export default BodyContainer;
