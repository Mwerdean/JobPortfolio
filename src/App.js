import React, { Component } from 'react';
import './App.css';
import Rxjs from 'rxjs';
import routes from './routes';
import Logo from './images/logo.png'
import { Transition } from 'react-transition-group'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      isMin: false,
    }
  }

  componentDidMount() {
    Rxjs.Observable.fromEvent(window, 'scroll')
      .debounceTime(20)
      .subscribe(e => {
        if (window.scrollY > 300) {
          this.setState({ isMin: true })
        } else {
          this.setState({ isMin: false })
        }
      })
  }

  render() {
    return (
      <div className="App">
        <div className={`Navbar ${this.state.isMin ? 'ShowNav' : ''}`}>
          <div className="Links">
            <a>About</a>
            <a>Contact</a>
          </div>
          <div><img src={Logo} alt="Logo" className="Logo" /></div>
          <div className="Links">
            <a>Skills</a>
            <a>Contact</a>
          </div>
        </div>
        {routes}
      </div>
    );
  }
}

export default App;
