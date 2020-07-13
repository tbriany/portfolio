import React from 'react';

const Projects = () => {

  const liveProjectsArr = [
    {
      name: "Carry",
      photo: require('./images/carryproductpage.png'),
      description: `Carry is a delivery service that allows users to place orders with some of their favorite retail 
      stores that are within the NYC boroughs. Designed with the idea that customers should be able to get any items they need, we focus on 
      delivering their necessities / wants from retail stores in delivery times ranging from 3hrs to end-of-day.`,
      github: "https://github.com/tbriany/Carry",
      live: "https://pursuitcarry.herokuapp.com/"
    },
    {
      name: "Fashion Footprint",
      photo: require('./images/fashionfootprinthome.png'),
      description: `An app that allows brands to share their designs and styles pre-season so that consumers can vote on
      the styles they're most likely to buy in order to prevent over-production of garments. App also educates consumers on the 
      environmental effects of different textiles.`,
      github: "https://github.com/AminesCodes/Fashion-Footprint",
      live: "https://fashion-fprint.herokuapp.com/"
    },
  ]

  const projectsArr = [
    {
      name: "Wanderfull",
      photo: require('./images/wanderfullFeed.png'),
      description: `A social media app that encourages users to share their endless amounts of travel photos 
      and favorite foods. App allows users to interact with their friends on a responsive UI, where they can 
      share/view/like posts, and search for posts by hashtag or location.`,
      github: "https://github.com/vonbarown/WanderFull"
    },
    {
      name: "Lurk",
      photo: require('./images/lurklogin.png'),
      description: `A social media app created using HTML, Javascript, and CSS.
      Users can create an account, 'lurk' (follow) other users, create posts, view all users posts, and 
      create photo albums and upload photos.`,
      github: "https://github.com/Jaiden16/SocialMediaApp"
    },
    {
      name: "BlackJack",
      photo: require('./images/blackjack.png'),
      description: `A game of 21 where the player plays against the computer. The goal of the game is 
      to draw cards whose added value will be as close as possible or equal to 21.
       Whoever is closest to 21 wins.`,
      github: "https://github.com/tbriany/21-web-game"
    },
  ]


  const livemappedArr = liveProjectsArr.map(el => {
    return (
      <div class="project">
        <h3>{el.name}</h3>
        <img src={el.photo} alt={el.name}></img>
        <div class="projectHover">
          <p>{el.description}</p>
          <a href={el.github}>Github</a>
          <a href={el.live}>Live</a>
        </div>
      </div>
    )
  })

  const mappedArr = projectsArr.map(el => {
    return (
      <div class="project">
        <h3>{el.name}</h3>
        <img src={el.photo} alt={el.name}></img>
        <div class="projectHover">
          <p>{el.description}</p>
          <a href={el.github}>Github</a>
        </div>
      </div>
    )
  })


  return (

    <section class="hero is-warning is-fullheight" id="projects" style={{ backgroundColor: "#E0F8FD" }}>
      <div class="hero-body">
        <div class="container">

          <div class="column is-full has-text-centered">
            <h1 class="title">
            Projects 
            </h1>
          </div>

          <div class="projects">
          {livemappedArr}
          {mappedArr}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Projects;