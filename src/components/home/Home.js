import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Transition } from 'react-transition-group';
import About from '../about/about';
import Skills from '../skills/skills'
import Rxjs from 'rxjs';
import './Home.css';

const duration = 500

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}
const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
}
const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration} appear={true}>
        {(state) => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
                
            }}>
                <div className="Intro">
                    <h2>User Experience / User Interface</h2>
                    <h1>Full-stack developer</h1>
                    <hr className="Seperator"/>
                    <button className="ContactMe">Contact Me</button>
                    <div>
                        <SocialIcon className="SocialIcon" url="https://twitter.com/werdean" />
                        <SocialIcon className="SocialIcon" url="https://github.com/Mwerdean" />
                        <SocialIcon className="SocialIcon" url="https://www.linkedin.com/" />
                        <SocialIcon className="SocialIcon" url="https://codepen.io/mwerdean/" />
                    </div>
                </div>
            </div>
        )}
    </Transition>
)

export default class Home extends Component {
    state = { show: true };

    componentDidMount() {
        Rxjs.Observable.fromEvent(window, 'scroll')
            .debounceTime(20)
            .subscribe(e => {
                if (window.scrollY < 50) {
                    this.setState({ show: true })
                } else {
                    this.setState({ show: false })
                }
            })
    }

    render() {
        const { show } = this.state
        return (
            <div>
                <div className="Intro-Background">
                    <Fade in={!!show} />
                    <button>Show me more</button>
                </div>
                <About />
                <Skills />
            </div>
        );
    }
}