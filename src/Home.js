import React from 'react';

const Home = (props) => {

  // (1). Pass Data--Array of Element (App.js to Home.js)
    console.log("Home++", props.Home);




    return (
        <div>

            <section class="section about-section gray-bg" id="about">
                <div class="container">
                    <div class="row align-items-center justify-content-around flex-row-reverse">
                        <div class="col-lg-6">
                            <div class="about-text">
                                <h3 class="dark-color">{props.Home[0]}</h3>
                                <h4 class="theme-color">{props.Home[1]}</h4>
                                <p>{props.Home[2]}</p>
                                <p>{props.Home[3]}</p>
                                <div class="btn-bar">
                                    <a class="p-btn theme">{props.Home[4]}</a>
                                    <a class="p-btn theme-t">{props.Home[5]}</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 text-center">
                            <div class="about-img">
                                <img className='bg-dark mt-5 mb-5' src="image/logo.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
