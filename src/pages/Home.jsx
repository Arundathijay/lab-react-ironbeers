import { Link } from "react-router-dom";
import beerLogo from "../assets/beers.png";
import randomLogo from "../assets/random-beer.png";

import newLogo from "../assets/new-beer.png";

const Home = () => {
  return (
    <div className='home'>
      <h1>Ironbeers</h1>
      <div>
        <img className='home-img' src={beerLogo} alt='Beers' />
        <Link to='/beers'>All Beers</Link>
      </div>
      <div>
        <img className='home-img' src={randomLogo} alt='Random-beers' />

        <Link to='/random-beer'>Random Beer</Link>
      </div>
      <div>
        <img className='home-img' src={newLogo} alt='Random-beers' />

        <Link to='/new-beer'>New Beer</Link>
      </div>
    </div>
  );
};

export default Home;
