import react from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './components/Search/Search';
import CampResults from './components/Results/CampResults';
import TrailResults from './components/Results/TrailResults';
import Favorites from './components/Favorites/Favorites';

export default (
    <Switch>
        <Route component={Search} path="/" exact />
        <Route component={TrailResults} path="/Results/TrailResults" />
    </Switch>
)