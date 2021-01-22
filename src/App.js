import React, { Component } from 'react'
import { Left } from './Left'
import { Right } from './Right'
import './style.css'
export default class App extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const data = this.props.profileData
        return (
            <div className="app">
                <Left
                    name={data.name}
                    subtext={data.subtext}
                    jobStatus={data.jobStatus}
                    twitterURL={data.twitterURL}
                    githubURL={data.githubURL}
                    linkedinURL={data.linkedinURL}
                />
                <Right
                    intro={data.intro}
                    resumeURL={data.resumeURL}
                />
          </div>
        )
    }
}
