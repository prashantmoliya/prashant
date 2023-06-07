import React from 'react';

const Service = (props) => {

  // (5). Pass Data--Array of Object (App.js to Service.js)
    console.log("Service++", props.Service);




    return (
        <div>

            <div class="services pd">
                <div class="container">
                    <h3 class="title">Services</h3>
                    <div class="row text-center">
                        {
                            props.Service.map((i) => {
                                return (
                                    <div class="col-md-3">
                                        <div class="square">{i.icon}</div>
                                        <div class="serv">
                                            <h5>{i.name}</h5>
                                            <p>{i.paragraph}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Service;
