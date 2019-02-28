import React, { Component } from "react";
import Header from "./components/Header.jsx";
import BodyContainer from "./components/BodyContainer.jsx";

import {
  faHome,
  faHashtag,
  faCompass,
  faCheckCircle,
  faUser,
  faBell,
  faPaperPlane,
  faChartPie,
  faCog
} from "@fortawesome/free-solid-svg-icons";

const fakeData = require('./data/fakeData');
//const linkData = require('./data/linkData');

const firebase = require("firebase");
require("firebase/firestore");


firebase.initializeApp({
  apiKey: "AIzaSyALVNdsumdjQ90HKLz5RMuhKasRY9js9o4",
  authDomain: "insta-data-2e0ac.firebaseapp.com",
  databaseURL: "https://insta-data-2e0ac.firebaseio.com",
  projectId: "insta-data-2e0ac",
  storageBucket: "insta-data-2e0ac.appspot.com",
  messagingSenderId: "89950348574"
});

var db = firebase.firestore();

class App extends Component {
  constructor() {
    super();
    this.state = {

      userDetails: {
      },
      pics: [],
      links : [
        { id: "1", link: "#feed", icon: faHome, text: "feed" },
        { id: "2", link: "#Explore", icon: faCompass, text: "Explore" },
        { id: "3", link: "#trending_tag", icon: faHashtag, text: "Trending Tag" },
        { id: "4", link: "#top_post", icon: faCheckCircle, text: "Top Post" },
        { id: "5", link: "#people", icon: faUser, text: "People" },
        { id: "6", link: "#notification", icon: faBell, text: "Notification" },
        { id: "7", link: "#direct", icon: faPaperPlane, text: "Direct" },
        { id: "8", link: "#stats", icon: faChartPie, text: "Stats" },
        { id: "9", link: "#setting", icon: faCog, text: "Setting" }
      ]
    };
  }

  componentDidMount() {
      // db.collection("UserDetails").doc("one").set(fakeData).then(function() {
      // console.log("Document successfully written!");

      var docRef = db.collection("UserDetails").doc("one");

      docRef.get().then((doc) => {
          if (doc.exists) {
              
              console.log("Document data:", doc.data());
              this.setState({userDetails: doc.data().fakedata.userDetails ,
              pics: doc.data().fakedata.pics})

          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });

  }
  
  render() {
    return (
      
      <div className="App">
      <h1>{this.state.speed}</h1>
        <Header links={this.state.links} userDetails={this.state.userDetails}/>
        <BodyContainer links={this.state.links} userDetails={this.state.userDetails} pics={this.state.pics} />
      </div>
    );
  }
}

export default App;
