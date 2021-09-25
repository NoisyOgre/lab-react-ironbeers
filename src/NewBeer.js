import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

function NewBeer() {
const [name, setName] = useState("");
const [tagline, setTagline] = useState("");
const [description, setDescription] = useState("");
const [first_brewed, setFirst_Brewed] = useState("");
const [brewers_tips , setBrewers_Tips ] = useState("");
const [attenuation_level, setAttenuation_Level] = useState("");
const [contributed_by, setContributed_By] = useState("");
const History = useHistory();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name: name,
            tagline:tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips : brewers_tips ,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by,
        }
        await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);
        setName("");
        setTagline("");
        setDescription("");
        setFirst_Brewed("");
        brewers_tips ("");
        setAttenuation_Level("");
        setContributed_By("");
        
    };
    return(
       <>
      <h3>Create Beer</h3>
      <form onSubmit = {handleFormSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Tagline</label>
        <input
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>First Brewed</label>
        <input
          type="text"
          value={first_brewed}
          onChange={(e) => setFirst_Brewed(e.target.value)}
        />
        <label>Brewers Tips </label>
        <input
          type="text"
          value={brewers_tips }
          onChange={(e) => setBrewers_Tips(e.target.value)}
        />
        <label>Attenuation Level</label>
        <input
          type="text"
          value={attenuation_level}
          onChange={(e) => setAttenuation_Level(e.target.value)}
        />
        <label>Contributed By</label>
        <input
          type="text"
          value={contributed_by}
          onChange={(e) => setContributed_By(e.target.value)}
        />

        <button type="submit">Create</button>
      </form>
    </>
    )

}; 
export default NewBeer;