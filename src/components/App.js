import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profilePicture from "../assets/profilePicture.jpg";
import Title from "./Title";
import "../index.css";

class App extends Component {
  state = { displayBio: false };

  toggleRender = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        <img src={profilePicture} alt="profile" className="profile" />
        <h1> Hello there, I am Tom </h1>
        {this.state.displayBio ? <Title /> : null}
        {this.state.displayBio ? (
          <div>
            <p> Front-End: HTML-CSS-Javascript-Webpack-React-Redux.</p>
            <p> Back-End: NodeJS / Express / SQL </p>
            <p> Programming aside. I enjoy working and improving as a Product Manager too.</p>
            <button onClick={this.toggleRender}> Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleRender}>Read More</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <h1>My social profiles and blog </h1>
        <SocialProfiles />
      </div>
    );
  }
}
export default App;
