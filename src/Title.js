import React, {Component} from 'react';

const TITLES = [
    "a software engineer / app developer",
    "an enthusiastic and keen learner",
    "always open for new challenges"
];

class Title extends Component {
    state = { titleIndex: 0};

componentDidMount() {
this.animateTitles()    
}

componentWillUnmount() {
clearInterval(this.indexInterval)
}

animateTitles = () => {
    this.indexInterval = setInterval(() => {
       const titleIndex = (this.state.titleIndex + 1) % TITLES.length
            this.setState({titleIndex: titleIndex})
    }, 3000);
}

    render () {
        const title = TITLES[this.state.titleIndex];
        return (
            <p>I am {title}</p>
        )
    }
}

export default Title