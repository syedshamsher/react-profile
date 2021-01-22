import React, { Component } from 'react'
import './style.css'

export class Left extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="left">
                <div className="bg-img"></div>
                <div className="left-inner">
                <div className="info">
                    <h2 className="name">{this.props.name}</h2>
                    <div className="subtext">{this.props.subtext}</div>
                    <div className="jobStatus">{this.props.jobStatus}</div>
                    <div className="social-links">
                    <a href={this.props.twitterURL} target="_blank"><i className="fa fa-twitter"></i></a>
                    <a href={this.props.githubURL} target="_blank"><i className="fa fa-github"></i></a>
                    <a href={this.props.linkedinURL}  target="_blank"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
                </div>
             </div>
        )
    }
}