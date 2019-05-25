import React from 'react';
import SOCIALPROFILES from "../data/socialProfile";


const SocialProfile = props => {
    
    const {link, image} = props.socialProfile    
        return (
         <div style={{display: "inline-block"}}>
           <a href={link}><img src={image} alt="social-profile" style={{ width: 50, height: 50, margin: 35 }}  /></a>
         </div>   
       )
}

const SocialProfiles = () =>  (
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
export default SocialProfiles

