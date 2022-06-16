import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Beers = () => {
  const [beers, setBeer] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => {
        setBeer(data);
      });
  }, []);

  return (
    <div>
      <ul className='beers'>
        {beers.map((beer) => {
          return (
            <li key={beer._id}>
              <Link className='beer-name' to={`/beer/${beer._id}`}>
                {beer.name}
              </Link>
              <p>{beer.tagline}</p>
              <h5>Created by: {beer.name}</h5>
              <img
                className='home-beer-img'
                src={beer.image_url}
                alt={beer.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Beers;
