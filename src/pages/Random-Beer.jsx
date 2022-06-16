import { useEffect, useState } from "react";

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((data) => {
        setBeer(data);

        console.log(data);
      });
  }, []);

  return (
    <div>
      {beer && (
        <div>
          <>
            <img src={beer.image_url} alt={beer._id} />
            <h3>{beer.name}</h3>
            <strong>{beer.tagline}</strong>
            <p>{beer.first_brewed}</p>

            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </>
        </div>
      )}
    </div>
  );
};

export default RandomBeer;
