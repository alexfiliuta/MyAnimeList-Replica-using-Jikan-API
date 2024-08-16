import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage";
import Anime from "./Components/Anime";
import Character from "./Components/Character";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/anime/:id" element={<Anime></Anime>}></Route>
      <Route path="/character/:id" element={<Character></Character>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
