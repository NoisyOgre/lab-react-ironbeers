import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

function RandomBeer(){
    const [randomBeer, setRandomBeer] = useState({});

    useEffect(()=> {
        async function getRandomBeer(){
            const response = await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers/random"
            );
            setRandomBeer(response.data);
        }
        getRandomBeer();
    }, [])

    return(

        <>
            <Header />
            {randomBeer.name ? ( 
             <>
               <img src={randomBeer.image_url} alt= {randomBeer.name} />
                <h2>{randomBeer.name}</h2>
                <p>{randomBeer.tagline}</p>
                <p>{randomBeer.first_brewed}</p>
               <p>{randomBeer.attenuation_level}</p>
               <p>{randomBeer.description}</p>
               <p>{randomBeer.contributed_by}</p>
               </>
           ) : ( 
               <h2>Loading</h2>
            )
           }
        </>
    );

}

export default RandomBeer

{/* <Header />
      {randomBeer.name ? (
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
      )} */}
