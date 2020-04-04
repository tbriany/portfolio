import React from 'react';
import MyForm from './MyForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
    return (
<section class="hero is-fullheight" id="contact" style={{backgroundColor: "#A6D1C9"}}>
  <div class="hero-body">
    <div class="container">

    <div class="columns is-mobile">
   <div class="column is-half is-offset-one-quarter">
   <p class="title" style={{color: "#E83C38"}}>Send me a message!</p>
      <MyForm/>
      <a href="https://github.com/tbriany" target="_blank" rel="noopener noreferrer" style={{color: "black"}}>
      <FontAwesomeIcon icon={faGithub} className="icon is-large"/>
      </a>
      <a href="https://www.linkedin.com/in/briany-taveras-457696191/" target="_blank" rel="noopener noreferrer" style={{color: "black"}}>
      <FontAwesomeIcon icon={faLinkedin} className="icon is-large"/>
      </a>
   </div>
   </div>
  </div>
  </div>
</section>
 );
}

export default Contact;