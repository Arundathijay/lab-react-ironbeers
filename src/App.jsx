import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beers from "./pages/Beers";
import SingleBeer from "./pages/SingleBeer";
import Navbar from "./components/Navbar";
import RandomBeer from "./pages/Random-Beer";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/beers' element={<Beers />} />
          <Route path='/beer/:id' element={<SingleBeer />} />
          <Route path='/random-beer' element={<RandomBeer />} />
          <Route path='/new-beer' element={<NewBeer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
