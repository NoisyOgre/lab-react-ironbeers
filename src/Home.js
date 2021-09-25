import React from 'react';
import { NavLink } from 'react-router-dom';
import beer from '../src/assets/beers.png';
import newBeer from '../src/assets/new-beer.png';
import randomBeer from '../src/assets/random-beer.png';

function Home() {
  return (
    <>
      <img src={beer} alt="beer"/>
      <div className="App">
        <NavLink activeStyle={{ color: 'red' }} exact to="/beers">
          All Beers
        </NavLink>
        <p className="ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
        </div>
        
      <img src={newBeer} alt="new-beer"/>
      <div className="App">
        <NavLink activeStyle={{ color: 'red' }} exact to="/new-beer/create">
          New Beer
        </NavLink>
        <p className="ipsum">Sed tristique dolor vel neque sagittis sollicitudin.</p>
        </div>
      <img src={randomBeer} alt="random-beer"/>
      <div className="App">
        <NavLink activeStyle={{ color: 'red' }} exact to="/beer/random">
          Random Beer
        </NavLink>
        <p className="ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
     
    </>
  );
}
export default Home;
