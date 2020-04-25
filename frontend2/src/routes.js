import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Choice from './pages/Choice';
import Message from './pages/Message'; 
import Adm from './pages/Adm';


export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/choice" component={Choice} />
            <Route path="/message" component={Message} />
            <Route path="/adm" component={Adm} />
        </Switch>
        </BrowserRouter>
    )
}