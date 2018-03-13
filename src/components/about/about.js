import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { CSSTransition } from 'react-transition-group';
import Rxjs from 'rxjs';
import './about.css';
import computer from '../../images/computer.jpg'
import arizona from '../../images/arizona.jpg'
import festive from '../../images/festivities.jpg'


const Translate = ({ children, ...props }) => (
    <CSSTransition  {...props} timeout={6000} classNames="translate">
        {children}
    </CSSTransition>
)
const TranslateR = ({ children, ...props }) => (
    <CSSTransition  {...props} timeout={6000} classNames="translateR">
        {children}
    </CSSTransition>
)

export default class About extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    componentDidMount() {
        Rxjs.Observable.fromEvent(window, 'scroll')
            .debounceTime(20)
            .subscribe(e => {
                if (window.scrollY > 500) {
                    this.setState({ show: true })
                } else {
                    this.setState({ show: false })
                }
            })
    }

    render() {
        return (
            <div>
                <div className="Flex FCenter">
                    <div className="Line"></div>
                    <h2 className="h2">About Matt</h2>
                    <div className="Line"></div>
                </div>
                <div className="AboutInfo">
                    My career began in Arizona building web applications, and I've arrived as a full-stack web designer looking to create a career.
                </div>
                <div className={`NoTranslate ${this.state.show ? 'ShowTranslate' : ''}`}>
                    <Translate in={this.state.show} >
                        <div className="Flex AboutDsc">
                            <div className="Computer">
                                <img src={arizona} />
                            </div>
                            <div>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                        </div>
                    </Translate>
                    <TranslateR in={this.state.show}>
                        <div className="Flex AboutDsc">
                            <div>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                            <div className="Computer">
                                <img src={computer} />
                            </div>
                        </div>
                    </TranslateR>
                    <Translate in={this.state.show}>
                        <div className="Flex AboutDsc">
                            <div className="Computer">
                                <img src={festive} />
                            </div>
                            <div>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                        </div>
                    </Translate>
                </div>
            </div>
        );
    }
}