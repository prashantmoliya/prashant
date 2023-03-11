import React from 'react'
import SocialLink from './SocialLink';

const Footer = (props) => {

    console.log("Footer(Props)++", props);




  return (
    <div className="App">
        <div className='footer'>

        {/* -Array and element string */}

            <div>{props.Array2}</div>



            <SocialLink />

        </div> 
    </div>
  );
}

export default Footer;
