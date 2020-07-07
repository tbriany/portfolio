import React from 'react';


const About = () => {

    return (

        <section class="hero is-fullheight" id="about" style={{ backgroundColor: "#FDD3E7" }}>
            <div class="hero-body">
                <div class="container">

                    <div class="columns">
                        <div class="column is-full has-text-centered" >                                
                                <h1>Briany Taveras</h1>
                        </div>
                    </div>

                    <div class="columns">
                    <div class="column is-half is-offset-one-quarter">
                                <p class="title is-5">Full Stack Web Developer</p>
                                <p class="subtitle" style={{ color: "black" }}>
                                  During my time in college I pursued a bachelors degree in psychology and international 
                                  studies with a concentration in culture and communication - due to my curiousity in 
                                  cultures from all around the world, as well as how the human mind works. 
                                  But I realized that my curiousity wasn't limited to just those subjects; I love 
                                  learning how things work, how to solve unique problems using creative solutions, 
                                  and being able to build fun apps. Summer of 2019, I was accepted into a year long 
                                  software engineering fellowship called <a href="https://www.pursuit.org/fellowship">Pursuit</a>, 
                                  where I learned to create full stack web apps. I was able to work alongside like-minded 
                                  individuals and collaborate on interesting projects. I'm now looking for an entry level role 
                                  as a Software Engineer, where I can contribute using my skills and grow as a developer.
                                </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;