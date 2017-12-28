import react from 'react';
import {Switch, Route} from 'react-router-dom';


// import Component from './component/Name';
// import Component from './component/Name';

export default (
    <Switch>
        <Route component={Search} path="/" exact />
        <Route component={Results} path="/results" />
        <Route component={Favorites} path="/favorites" />
    </Switch>
)