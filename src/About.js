import React from 'react';

const About = (props) => {

  // (4). Pass Data--Array of Object (App.js to About.js)
    console.log("About++", props.About);




    return (
        <div>

            <section class="sec services-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-title">
                                <h2>About</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {/*<!-- feaure box -->*/}
                        {
                            props.About.map((i) => {
                                return (
                                    <div class="col-sm-6 col-lg-4">
                                        <div class="feature-box-1">
                                            <div class="icon">
                                                <i>{i.icon}</i>
                                            </div>
                                            <div class="feature-content">
                                                <h5>{i.title}</h5>
                                                <p>{i.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;
