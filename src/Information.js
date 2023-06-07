import React from 'react';
import { Link } from 'react-router-dom';

const Information = (props) => {

  // (3). Pass Data--Single Object (Profile.js to Information.js)

  


    return (
        <div className='services'>

            <div class="py-5 service-22">
                <div class="container">
                    {/*<!-- Row -->*/}
                    <div class="row wrap-service-22">
                        {/*<!-- Column -->*/}
                        <div class="col-lg-6">
                            <img src="image/logo.png"
                                class="img-size rounded img-shadow img-fluid" alt="wrapkit" />
                        </div>
                        {/*<!-- Column -->*/}
                        <div class="col-lg-6 mt-4 mt-md-0">
                            <div class="col-md-8 d-flex align-items-center">
                                <h4 class="ms-3 fw-bold">React Information</h4>
                            </div>
                            <div class="card-body p-3">
                                <ul class="list-group">
                                    <li class="list-group-item border-0 ps-0 pt-0 text-sm">
                                        <strong class="text-dark fw-bold">Original author :</strong> &nbsp; {props.Information?.author || "Jordan Walke"}
                                    </li>
                                    <li class="list-group-item border-0 ps-0 text-sm">
                                        <strong class="text-dark fw-bold">Developer(s) :</strong> &nbsp; {props.Information?.developer || "Meta and community"} 
                                    </li>
                                    <li class="list-group-item border-0 ps-0 text-sm">
                                        <strong class="text-dark fw-bold">Initial release :</strong> &nbsp; {props.Information?.initial || "May 29, 2013; 10 years ago"}
                                    </li>
                                    <li class="list-group-item border-0 ps-0 text-sm">
                                        <strong class="text-dark fw-bold">Stable release :</strong> &nbsp; {props.Information?.stable || "18.2.0 / 14 June 2022; 11 months ago"}
                                    </li>
                                    <li class="list-group-item border-0 ps-0 text-sm">
                                        <strong class="text-dark fw-bold">Platform :</strong> &nbsp; 
                                        {props.Information?.platform || "Web platform"}
                                    </li>
                                    <li class="list-group-item border-0 ps-0 text-sm">
                                        <strong class="text-dark fw-bold">Type :</strong> &nbsp; 
                                        {props.Information?.type || "JavaScript library"}
                                    </li>
                                    <li class="list-group-item border-0 ps-0 text-sm">
                                        <strong class="text-dark fw-bold">License :</strong> &nbsp;
                                        {props.Information?.license || "MIT License"} 
                                    </li>
                                    <li class="list-group-item border-0 ps-0 text-sm">
                                        <strong class="text-dark fw-bold">Repository :</strong> &nbsp;
                                        <Link to="https://github.com/facebook/react">{props.Information?.repository || "github.com/facebook/react"}
                                        </Link>
                                    </li>
                                    <li class="list-group-item border-0 ps-0 text-sm">
                                        <strong class="text-dark fw-bold">Website :</strong> &nbsp;
                                        <Link to="https://react.dev/">{props.Information?.website || "react.dev"}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Information;
