import React, { Component } from 'react';
import Projects from "./Projects";
import SocialProfiles from './SocialProfiles';
import profilePic from "./assets/profilePic.jpg"
import Title from "./Title.js"
import "./index.css"

class App extends Component {
    state = {displayBio: false}
    

    toggleRender = () => {
        this.setState({displayBio: !this.state.displayBio})
    }

    render() {
        // FOUR WAYS TO RENDER / MANIPULATE THE STATE 
        // 1ST
        // const bio = this.setState.displayBio ?  {(
        //     <div>
        //         <p> I live in Sydney, code everyday</p>
        //         <p> Javascript is my favorite language</p>
        //         <p> Beside coding I don't do much else </p>
        //     </div>
        // ): null
        
        // 2ND
        // if(this.state.displayBio === false){
        //     bio = null
        // }

        // 3RD 
        // if(!this.state.displayBio) using ! is equal to this.state.displayBio === false
        return (
            <div> 
                <img src={profilePic} alt="profile" className="profile" />
                <h1> Hello there, I am Tom </h1>
                {this.state.displayBio ? <Title /> : null}
                {
                    this.state.displayBio ?  (
                             <div>
                                 <p> My current tech stack: HTML/CSS/Javascript/React-Redux-React Hooks.</p>
                                 <p> I also like to solve business problems Product Management</p>
                                 <button onClick={this.toggleRender}> Show Less</button>
                             </div>
                         ): (
                             <div>
                             <button onClick={this.toggleRender}>Read More</button> 
                             </div>
                         )
                    }
                <hr />
                <Projects />  
                <hr />
                <SocialProfiles /> 
            </div>
        )
    }
}

export default App