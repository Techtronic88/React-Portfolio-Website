import React, {Component} from 'react';

const TITLES = [
    "a Javascript/ Front-end Developer",
    "an enthusiastic and keen learner",
    "always up for new challenges"
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true};
componentDidMount() {
this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000)
this.animateTitles()    
}


// We know with componentDidMount we are running a asyncronous operation
// When component finish mounting  setInterval and setTimeOut will run their operation..

// This would result in some sort of memory leaks and and stack overflow ???
// The solution is to use componentWillUnmount WHY ??????
// is because we don't want to have memory leaks since we setTimeOut  / setInterval creating more stacks
// It is not major, the code still runs but React does warn us about this so we might as well clean them up right here

componentWillUnmount() {
clearInterval(this.indexInterval)
clearTimeout(this.timeout)
}

animateTitles = () => {
    this.indexInterval = setInterval(() => {
       const titleIndex = (this.state.titleIndex + 1) % TITLES.length
            this.setState({titleIndex: titleIndex, fadeIn: true});
            this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000); 
    }, 4000);
}
    render () {
        const {titleIndex, fadeIn} = this.state;
        const title = TITLES[titleIndex];
        return (
            <p className={ fadeIn ? "title-fade-in" : "title-fade-out" }>I am {title}</p>
        )
    }
}

export default Title