import { Switch, Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import Planets from '../components/pages/Planets';
import Statistics from '../components/pages/Statistics';
import Discription from '../components/pages/DiscriptionPlanet'

const Router = () => (
    <Switch>
        <Route path="/statistics">
            <Statistics />
        </Route>
        <Route path="/planets">
            <Planets />
        </Route>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/discription">
            <Discription />
        </Route>
    </Switch>
);


export default Router;