import React from 'react';

const Blog = () => {


    return (
        <div>

            <div class="container mt-4 mb-4">
                <div class="row">
                    <div class="col-md-8">

                        <div class="card mb-3">
                            <img src="https://cdn.pixabay.com/photo/2014/08/11/11/50/moon-415501_1280.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                        </div>

                        <div class="card mb-3">
                            <img src="https://cdn.pixabay.com/photo/2016/05/01/21/20/earth-1365995_1280.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                        </div>

                    </div>
                        <div class="col-12 col-md-4">

                            <div class="card">
                                <div class="card-body">
                                    <h5>A propos de l'auteur</h5>
                                    <hr />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate amet ullam excepturi odio impedit saepe nemo repellendus, aut suscipit voluptas omnis quas quisquam accusamus illo laboriosam rerum, totam ea eaque.</p>
                                </div>
                            </div>
                            <br />
                            <div class="card">
                                <div class="card-body">
                                    <h5>Les formations</h5>
                                    <hr />
                                    <button type="button" class="btn btn-light">Payantes</button>
                                    <button type="button" class="btn btn-dark">Gratuites</button>
                                </div>
                            </div>

                            <br />
                            <div class="card">
                                <div class="card-body">
                                    <h5>Présentation</h5>
                                    <hr />
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/ZEyAs3NWH4A" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
            </div>

        </div>
    );
}

export default Blog;
