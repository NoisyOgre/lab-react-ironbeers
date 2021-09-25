import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

function BeerDetails({ match }) {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    async function getBeerDetails() {
      const beerId = match.params.id;
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeer(response.data);
    }
    getBeerDetails();
  });

  return (
    <>
      <Header />
      {beer.name ? (
        <>
          <img src={beer.image_url} alt={beer.name} />
          <div className="beer-detail-text">
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </div>
        </>
      ) : (
        <p>Getting your beer..</p>
      )}
    </>
  );
}

export default BeerDetails;
