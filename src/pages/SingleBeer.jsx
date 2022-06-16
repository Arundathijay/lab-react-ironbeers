import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBeer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log(response.data);
        setBeer(response.data);
        console.log(beer);
      });
  }, []);

  return (
    <div>
      {/* /*{beer && ( */}
      <div>
        <>
          <img src={beer.image_url} alt={beer._id} />
          <h3>{beer.name}</h3>
          <p>{beer.attenuation_level}</p>
          <strong>{beer.tagline}</strong>
          <p>{beer.first_brewed}</p>
          <p>{beer.description}</p>
        </>
      </div>
      {/* /*)} */}
    </div>
  );
};

export default SingleBeer;
