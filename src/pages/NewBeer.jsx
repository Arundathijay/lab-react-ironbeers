import { useState } from "react";
import BeerForm from "../components/BeerForm";
import axios from "axios";
import { useNavigate } from "react-router";

const NewBeer = () => {
  const [beer, setBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    firstBrewed: "",
    brewersTips: "",
    contributedBy: ""
  });
  const navigate = useNavigate();

  const handleBeerCreation = (event) => {
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beer)
      .then((response) => {
        console.log(beer);
        setBeer(response.data);
        navigate("/");
      });
  };

  return (
    <div className='form'>
      <BeerForm beer={beer} onBeerChange={setBeer} />
      <button onClick={handleBeerCreation}>Add new Beer</button>
    </div>
  );
};

export default NewBeer;
