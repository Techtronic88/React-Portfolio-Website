import React, {Component} from 'react';
import SOCIALPROFILES from "../data/socialProfile";


class SocialProfile extends Component {
    render() {
    
    const {link, image} = this.props.socialProfile    
        return (
         <div style={{display: "inline-block"}}>
         <a href={link}><img src={image} alt="social-profile" style={{ width: 50, height: 50, margin: 35 }}  /></a>
         
         </div>   
        )
    }
}

class SocialProfiles extends Component {
    render() { 
        return (
        <div>
        {
            SOCIALPROFILES.map((PROFILE) => {
                return (
                    <SocialProfile key={PROFILE.id} socialProfile={PROFILE} />
                );
            })
        }

        </div>
        )
    }
} 

export default SocialProfiles

