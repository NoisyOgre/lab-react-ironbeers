import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './Home';
import Header from './Header';
import BeerList from './BeerList';
import BeerDetails from './BeerDetails';
import RandomBeer from './RandomBeer';
import NewBeer from "./NewBeer";

function App() {
  return (
    <>
    <div className="App">
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeerList} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/beer/random" component={RandomBeer} />
        <Route exact path="/new-beer/create" component={NewBeer} />
      </Switch>
    </div>
    </>
  );
}

export default App;
