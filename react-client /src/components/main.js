import React from 'react';
import Landing from './landingpage';
import {Switch, Route} from 'react-router-dom';
import Aboutme from './aboutme';
import Contact from './contact';
import Project from './projects';
import Resume from './resume';

const Main = () =>(
    <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route path='/aboutme' component={Aboutme}></Route>
        <Route path='/projects' component={Project}></Route>
        <Route path='/resume' component={Resume}></Route>
        <Route path='/contact' component={Contact}></Route>
    </Switch>
)

export default Main;