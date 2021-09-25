import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Header from './Header';

function BeerList() {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    async function getBeers() {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setBeer(response.data);
    }
    getBeers();
  });

  return (
    <>
      <Header />

      <h3>Beer List</h3>
      {beer.length > 0 ? (
        beer.map((beer) => {
          return (
            <div className="container">
              <div className="beer-list">
                <NavLink to={`/beers/${beer._id}`}>
                  <img
                    className="beer-img"
                    src={beer.image_url}
                    alt={beer.name}
                  />
                </NavLink>
                <div className="App beer-text">
                  <h2>{beer.name}</h2>
                  <h3 className="tagline">{beer.tagline}</h3>
                  <p>{beer.contributed_by}</p>
                </div>
              </div>
              <hr />
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
export default BeerList;
