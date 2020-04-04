import React from 'react';


const About = () => {

    return (

        <section class="hero is-fullheight" id="about" style={{ backgroundColor: "#FDD3E7" }}>
            <div class="hero-body">
                <div class="container">

                    <div class="columns">
                        <div class="column is-4" >
                            {/* <div class="box" style={{ color: "transparent" }} > */}
                                <p class="title is-5" style={{ color: "#20214D" }}>Briany Taveras</p>
                                {/* <p class="subtitle">This column is only 200px wide.</p> */}
                            {/* </div> */}
                        </div>
                        <div class="column">
                            <div class="box">
                                <p class="title is-5">About me.........</p>
                                {/* <p class="subtitle">This column will take up the remaining space available.</p> */}
                            </div>
                        </div>
                    </div>


                    {/* 
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical">
                            <div class="tile">
                                <div class="tile is-parent">
                                    <article class="tile is-child is-half notification is-warning ">
                                        <p class="title">Wide tile</p>
                                        <p class="subtitle">Aligned with the right tile</p>
                                        <div class="content">
                                        </div>
                                    </article>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child notification is-danger">
                                        <p class="title">Wide tile</p>
                                        <p class="subtitle">Aligned with the right tile</p>
                                        <div class="content">
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    );
}

export default About;