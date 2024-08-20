import {HashRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage";
import Anime from "./Components/Anime";
import Character from "./Components/Character";

function App() {
  return (
   <HashRouter>
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/anime/:id" element={<Anime></Anime>}></Route>
      <Route path="/character/:id" element={<Character></Character>}></Route>
    </Routes>
   </HashRouter>
  );
}

export default App;
