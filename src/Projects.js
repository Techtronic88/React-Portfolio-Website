import React, {Component} from 'react';
import PROJECTS from "./data/projects";
import SOCIALPROFILE from "./data/socialProfile"

class Project extends Component {
    render () {
        const {title, image, description, link} = this.props.project

        return (
        <div style={{ display: "inline-block", width: 300, margin: 10 }}> 
            <h3>{title}</h3>
            <img src={image} alt="profile" style={{ width: 200, height: 120 }}  href={link} />
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
        )
    }
}

class SocialProfile extends Component {
    render() {
        const {image, name,} = this.props.images
        return (
        <div style={{ display: "inline-block", width: 300, margin: 10}}>
            <p>{name}</p>
            <img src={image} alt="profile" style={{width: 80, height: 80}}/>
            
        </div>
        )
    }
} 

class Projects extends Component {
    render() {
        return (
        <div>
            <h2> Highlighted Project</h2>
            <div>
                {
                    PROJECTS.map((PROJECT) => {
                        return (
                            <Project key={PROJECT.id} project={PROJECT} />
                        );
                    })
                }

            </div>
            <h2> Social Media</h2>
            <div>
                {
                    SOCIALPROFILE.map((PROFILE) => {
                        return (
                            <SocialProfile key={PROFILE.id} images={PROFILE} />
                        );
                    })
                }
            </div>
        </div>
        )
    }
}

export default Projects;