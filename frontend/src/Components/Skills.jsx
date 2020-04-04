import React from 'react';
import IconReact from 'react-devicon/react/original-wordmark'

const Skills = () => {

    return (
<section class="hero is-fullheight" id="skills" style={{backgroundColor: "#20214D"}}>
  <div class="hero-body" >
    <div class="container">
   <div class="columns is-mobile">
   <div class="column is-half is-offset-one-quarter"> 
   <p class="title" style={{color: "#FDD3E7"}}>Skills</p>
   <div>
   <IconReact width={100} height={100}/>
   </div> 
   </div>
   </div>

    </div>
  </div>
</section>
 );
}

export default Skills;