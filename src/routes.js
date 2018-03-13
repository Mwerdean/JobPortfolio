import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'

export default (
    <Switch>
     <Route exact path="/" component={ Home }/>
    </Switch>
)