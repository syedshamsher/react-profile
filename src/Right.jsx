import React, { Component } from 'react'
import './style.css'

export class Right extends Component {
   
    render() {
      const data = this.props.resumeURL
      console.log(data)
        return (
            <div className="right">
        <div className="right-inner">
          <div className="introduction">
            <h4>Intro</h4>
            <div className="content">
              <p className="intro-p">I recently completed Full Stack Web Development program at Masai School (30 weeks program, 1200+ hours of Coding, 100+ hours of Softskills, 400+ Git Commits). </p>
              <p className="intro-p">I enjoy being the bridge between engineering and design, and feel right at home as a full stack web developer. At Masai School I had experience in developing and designing products for the web, from simple landing pages to full-fledged web apps.</p>
              <span className="intro-p job-pls">I love building web applications</span>
            </div>
          </div>
          <div className="skills">
            <h4>Skills</h4>
            <div className="content">
              <div className="skill-category">
                <strong>Languages: &nbsp;</strong>
                <span>JavaScript (ES6), HTML5, CSS3</span>
              </div>
              <div className="skill-category">
                <strong>Libraries &amp; Frameworks: &nbsp;</strong>
                <span>MongoDB, Express, React, Node.js</span>
              </div>
              <div className="skill-category">
                <strong>Tools: &nbsp;</strong>
                <span> Github, Command Line, Postman, Heroku &amp; Vercel</span>
              </div>
            </div>
          </div>
          <div className="education">
            <h4>Education</h4>
            <div className="content">
              <div className="university"><a href="https://www.masaischool.com/" target="blank">Masai School</a></div>
              <div className="major"><strong>30 Weeks Program: &nbsp;</strong>Full Stack Web Development</div>
              <div className="conc"><strong>Concentration: &nbsp;</strong> Web Development </div>
              <div className="grad-date"> Graduation: 27 Feb 2021</div>
              <div className="university" style={{marginTop: "2%"}} >MCKV Institute of Engineering</div>
              <div className="minor"><strong>B.Tech: &nbsp;</strong>Automobile Engineering</div>
              <div className="study-abroad"><strong></strong></div>
              <div className="grad-date"> Graduation: June 2020</div>
              <div className="university" style={{marginTop: "2%"}} >Saifee Hall</div>
              <div className="minor"><strong>B.Tech: &nbsp;</strong>Intermediate</div>
              <div className="study-abroad"><strong></strong></div>
              <div className="grad-date"> Mar 2015 - Mar 2016</div>
            </div>
          </div>
          <div className="experience">
            <h4>Experience</h4>
            <div className="content">
              <div className="exp-item">
                <div className="job">
                  <a className="company" href="https://starry.com/" target="blank">Volvo Eicher Commercial Vehicles.</a>
                  <div className="duration">June 2019 &mdash; July 2019</div>
                </div>
                <div className="title">Internship</div>
                <ul className="description">
                  <li>BS-VI Technology : analysis of the Engine</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="projects">
            <h4>Projects</h4>
            <div className="content">
              <div className="project-item">
                <a className="project-title" href="/#" target="blank">Portfolio</a>
                <p className="project-desc">Portfolio site designed and coded from scratch to showcase my skills and past work</p>
              </div>
              <div className="project-item">
                <a className="project-title" href="/#" target="blank">Asos</a>
                <p className="project-desc">Inspired by asos.com</p>
                <ul className="description">
                  <li>Solo Project : crafted in 2 weeks</li>
                  <li>Tech Stack : React, Redux, JavaScript,MongoDB, Express Node.js</li>
                  <li>Features : User can shop make payments and also contact seller by sending feedback via email.</li>
                </ul>
              </div>
              <div className="project-item">
                <a className="project-title" href="/#" target="blank">Amazon Prime Video Clone</a>
                <p className="project-desc">An OTT platform</p>
                <ul className="description">
                  <li>Collaborative Project : completed in 6 days along with 2 developers</li>
                  <li>Tech Stack : React, Redux, JavaScript,MongoDB, Express Node.js</li>
                  <li>Features: In this application user can add movie to his watchlist, watch movie, can make payment for subscription and send feedback for a movie.</li>
                </ul>
              </div>
              <div className="project-item">
                <a className="project-title" href="/#" target="blank">Newsday</a>
                <p className="project-desc">News web application</p>
                <ul className="description">
                  <li>Solo Project : crafted in 2 weeks</li>
                  <li>Tech Stack : React, Redux, JavaScript</li>
                  <li>Features : Simple News web app where reader can search news and also filter based on preferences. </li>
                </ul>
              </div>
              <div className="project-item">
                <a className="project-title" href="/#" target="blank">Expense Manager</a>
                <p className="project-desc">Website which allows to manage expenses</p>
                <ul className="description">
                  <li>Collaborative Project : completed in 4 days along with 2 developers. </li>
                  <li>Tech Stack : HTML, CSS, JavaScript.</li>
                  <li>Features: Maintains track records of all credits and debits of the user. </li>
                </ul>
              </div>
            </div>
          </div>
          <a className="resume" href={data} target="blank"><div className="resume-link">View a pdf of my Resume</div></a>
        </div>
      </div>
        )
    }
}
