import React, { Component } from 'react';
import Rxjs from 'rxjs'
import './skills.css'

export default class Skills extends Component {
    constructor() {
        super()
        this.state = {
            type: false
        }
    }

    componentDidMount() {
        Rxjs.Observable.fromEvent(window, 'scroll')
            .debounceTime(20)
            .subscribe(e => {
                if (window.scrollY > 1100) {
                    this.setState({ type: true })
                } else {
                    this.setState({ type: false })
                }
            })
    }

    render() {
        return (
            <div className="BGSkill">
                <div className={`DontType ${this.state.type ? 'typewriter' : ''}`}>
                    <h1>Matts' Developer Skills</h1>
                </div>
                <div className="container">
                    <div className="left">
                      <div>Front End Developer <div className="ShowList">HTML CSS SASS REACT</div></div> 
                    </div>
                    <div className="right">
                        <div>Front-End Skills</div>
                    </div>
                </div>
            </div>
        );
    }
}