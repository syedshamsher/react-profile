import React, { Component } from 'react'
import './style.css'

export class Right extends Component {
    constructor(props) {
        super(props)
    }
    render() {
      const data = this.props.resumeURL
      console.log(data)
        return (
            <div className="right">
        <div className="right-inner">
          <div className="introduction">
            <h4>Intro</h4>
            <div className="content">
              <p className="intro-p">I recently completed Full Stack Web Development program at Masai School (30 weeks program, 1500+ hours of Coding). </p>
              <p className="intro-p">I enjoy being the bridge between engineering and design, and feel right at home as a full stack web developer. I&#39;m experienced in developing and designing products for the web, from simple landing pages to full-fledged web apps.</p>
              <span className="intro-p job-pls">I'm currently looking for a web developer role before I graduate in 27 February 2021!</span>
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
                <span>Git &amp; Github, Command Line, Postman</span>
              </div>
            </div>
          </div>
          <div className="education">
            <h4>Education</h4>
            <div className="content">
              <div className="university"><a href="https://www.masaischool.com/" target="_blank">Masai School</a></div>
              <div className="college"><a href="https://www.mckvie.edu.in/" target="_blank">MCKV Institute of Engineering</a></div>
              <div className="major"><strong>30 Weeks Program: &nbsp;</strong>Full Stack Web Development</div>
              <div className="minor"><strong>B.Tech: &nbsp;</strong>Automobile Engineering</div>
              <div className="conc"><strong>Concentration: &nbsp;</strong> Web Development </div>
              <div className="study-abroad"><strong></strong></div>
              <div className="grad-date">Expected Graduation: 27 Feb 2021</div>
            </div>
          </div>
          <div className="experience">
            <h4>Experience</h4>
            <div className="content">
              <div className="exp-item">
                <div className="job">
                  <a className="company" href="https://starry.com/" target="_blank">Volvo Eicher Commercial Vehicles.</a>
                  <div className="duration">June 2019 &mdash; July 2019</div>
                </div>
                <div className="title">Internship</div>
                <ul className="description">
                  <li>Learnt the latest BS-VI Technology</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="projects">
            <h4>Projects</h4>
            <div className="content">
              <div className="project-item">
                <a className="project-title" href="#" target="_blank">Portfolio</a>
                <p className="project-desc">Portfolio site designed and coded from scratch to showcase my skills and past work</p>
              </div>
              <div className="project-item">
                <a className="project-title" href="#" target="_blank">Project Name...</a>
                <p className="project-desc">project description....</p>
              </div>
              <div className="project-item">
                <a className="project-title" href="#" target="_blank">Project Name...</a>
                <p className="project-desc">Description..</p>
              </div>
              <div className="project-item">
                <a className="project-title" href="#" target="_blank">Project Name...</a>
                <p className="project-desc">Description...</p>
              </div>
            </div>
          </div>
          <a className="resume" href={data} target="_blank"><div className="resume-link">Grab a PDF of my full resume</div></a>
        </div>
      </div>
        )
    }
}
