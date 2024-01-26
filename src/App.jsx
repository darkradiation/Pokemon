import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import NewHome from "./pages/NewHome";

function App() {
  return (
    <>
      <div className="bg-collage-container">
        <div className="bg-collage-image">
          <img
            src="https://preview.redd.it/lwrhsnubpvrb1.png?width=1024&format=png&auto=webp&s=5221a29644c2684f644c1e9306a85f91048df728"
            alt=""
          />
        </div>
        <div className="bg-collage-image">
          <img
            src="https://preview.redd.it/6j61foubpvrb1.png?width=1024&format=png&auto=webp&s=d01971877851004c8dd725d60e8111c49f0b52c9"
            alt=""
          />
        </div>
        <div className="bg-collage-image">
          <img
            src="https://preview.redd.it/ubzwa5vbpvrb1.png?width=1024&format=png&auto=webp&s=f2d7ed2e89f380d24012664ce3d1c5173f44b285"
            alt=""
          />
        </div>
        <div className="bg-collage-image">
          <img
            src="https://preview.redd.it/3foflnubpvrb1.png?width=1024&format=png&auto=webp&s=84a79e8a0c4f9b51e6d77d040528125f92078dbb"
            alt=""
          />
        </div>
        <div className="bg-collage-image">
          <img
            src="https://preview.redd.it/x8s2anubpvrb1.png?width=1024&format=png&auto=webp&s=cdf0c0be6b604b55aebb7088d5109fcfb9765aa0"
            alt=""
          />
        </div>
        <div className="bg-collage-image">
          <img
            src="https://preview.redd.it/pzmf3oubpvrb1.png?width=1024&format=png&auto=webp&s=5b102b3a2c5d6ea67dd3ce00e99ab5a01f0bac7b"
            alt=""
          />
        </div>
        <div className="bg-collage-image">
          <img
            src="https://preview.redd.it/qzdzjnubpvrb1.png?width=1024&format=png&auto=webp&s=96642b2ca03a98a65b00f7f6f1333858b5ec9862"
            alt=""
          />
        </div>
        <div className="bg-collage-image">
          <img
            src="https://preview.redd.it/dstraoubpvrb1.png?width=1024&format=png&auto=webp&s=6fc04b44b585378773382486b7f6991b89bdd277"
            alt=""
          />
        </div>
      </div>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="searchPage" element={<SearchPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
