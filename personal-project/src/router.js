import react from 'react';
import { Switch, Route } from 'react-router-dom';

import Favorites from './components/Favorites/Favorites';
import Search from './components/Search/Search';
import CampingResults from './components/Results/TrailResults';
import FishingResults from './components/Results/FishingResults';
import TrailResults from './components/Results/TrailResults';

export default (
    <Switch>
        <Route component={Search} path="/" exact />
        <Route component={CampingResults} path="/Results/CampingResults" />
        <Route component={FishingResults} path="/Results/FishingResults" />
        <Route component={TrailResults} path="/Results/TrailResults" />
    </Switch>
)