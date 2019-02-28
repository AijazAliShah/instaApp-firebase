import React, { Component } from "react";
import FeaturedStories from "./FeaturedStories";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faThLarge } from "@fortawesome/free-solid-svg-icons";

class MainBody extends Component {
  render() {
    return (
      <div className="mainBody">
        <div className="featuredStories">
          <FeaturedStories
            leftData="Featured Stories"
            rightData="Popular Stories"
            pics={this.props.pics.slice().sort((a, b) => (a.impressions > b.impressions ? -1 : 1)).slice(0, 6)}
          
          />
        </div>

        <br />

        <div className="featuredStories">
          <FeaturedStories
            leftData="Latest Feed"
            rightData={
              <div>
                <FontAwesomeIcon icon={faBars} />
                &nbsp;
                <FontAwesomeIcon icon={faThLarge} />
              </div>
            }
            pics={this.props.pics}

          />
        </div>
      </div>
    );
  }
}

export default MainBody;
