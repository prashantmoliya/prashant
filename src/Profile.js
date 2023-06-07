import { React, useState} from 'react';
import { TfiFacebook, TfiTwitterAlt, TfiGoogle, TfiYoutube, TfiAndroid } from "react-icons/tfi";
import Information from './Information';

const Profile = (props) => {

  // (2). Pass Data--Array of Element (App.js to Profile.js)
    console.log("Profile++", props.Profile);


  // (3). Pass Data--Single Object (Profile.js to Information.js)

    const information= {
        author : null,
        developer : null,
        initial : null,
        stable : null,
        platform : null,
        type : null,
        license : null,
        repository : null,
        website : null
    }

    const [hide, sethide] = useState(false);
    



    return (
        <div className='profile'>

            <div class="content mt-4 mb-4">
                <div class="card-1">
                    <div class="firstinfo">
                        <img className='rounded-circle' src="image/profile2.jpg" />

                        <div class="profileinfo">
                            <h1>{props.Profile[0]}</h1>
                            <h3>{props.Profile[1]}</h3>
                            <p class="bio">{props.Profile[2]}</p>
                        </div>
                    </div>
                </div>
                <div class="badgescard">
                    <span class="fa fa-facebook"><TfiFacebook /></span>
                    <span class="fa fa-twitter"><TfiTwitterAlt /></span>
                    <span class="fa fa-google-plus"><TfiGoogle /></span>
                    <span class="fa fa-youtube"><TfiYoutube /></span>
                    <span class="fa fa-android"><TfiAndroid /> </span>
                </div>
            </div>

            {hide == <Information Information={information} />}

        </div>
    );
}

export default Profile;
