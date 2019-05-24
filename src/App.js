import React, { Component } from 'react';
import Projects from "./Projects";

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
                <h1> Hello There </h1>
                <p>  My name is Thomas. I am a software engineer </p>
                <p>  This is my 5th time practicing  React and loving it</p>
                {
                    this.state.displayBio ?  (
                             <div>
                                 <p> I live in Sydney, code everyday</p>
                                 <p> Javascript is my favorite language, probably will learn Java next</p>
                                 <p> Beside coding I walk and exercise alot</p>
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
            </div>
        )
    }
}

export default App