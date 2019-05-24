import React, {Component} from 'react';
import SOCIALPROFILE from "./data/socialProfile";


class SocialProfile extends Component {
    render() {
    
    const {link, image} = this.props.socialProfile    
        return (
         <div>
         <a href={link}><img src={image} alt="social-profile"></img></a>
         
         </div>   
        )
    }
}

class SocialProfiles extends Component {
    render() {
        const {image, name,} = this.props.images
        return (
       
        
        <div>
        {
            SOCIALPROFILE.map((PROFILE) => {
                return (
                    <SocialProfile key={PROFILE.id} socialProfile={PROFILE} />
                );
            })
        }

        </div>
        )
    }
} 

export default SocialProfile

