import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { MainScreen } from "./components/MainScreen/MainScreen";
import { Animals } from "./components/Animals/Animals";
import { Fruits } from "./components/Fruits/Fruits";  
import { Vege } from "./components/Vege/Vege";
import { Colors } from "./components/Colors/Colors";
import { Days } from "./components/Days/Days";
import { Shapes } from "./components/Shapes/Shapes";
import { Alphabet } from "./components/Alphabet/Alphabet";
import { Numbers } from "./components/Numbers/Numbers";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import "./styles/animations.scss";
import { MagicTransition } from "./components/MagicTransition/MagicTransition";
import { PartsOfTheBody } from "./components/PartsOfTheBody/PartsOfTheBody";
import { Counter } from "./components/Counter/Counter";
import { CountAnimals } from "./components/CountAnimals/CountAnimals";
import { Family } from "./components/Family/Family";
import { Seasons } from "./components/Seasons/Seasons";
import { SeaCreatures } from "./components/seaCreatures/seaCreatures";
import { SchoolItems } from "./components/schoolItems/schoolItems";
import { HomeItems } from "./components/homeItems/homeItems";

function App() {

   return (
    <HashRouter>
      <ScrollToTop />
      <MagicTransition />

      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/vegetables" element={<Vege />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/days" element={<Days />} />
        <Route path="/geometric shapes" element={<Shapes />} />
        <Route path="/english alphabet" element={<Alphabet />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/body" element={<PartsOfTheBody />} />
        <Route path="/math game" element={<Counter />} />
        <Route path="/count animals" element={<CountAnimals />} />
        <Route path="/family" element={<Family />} />
        <Route path="/seasons" element={<Seasons />} />
        <Route path="/sea creatures" element={<SeaCreatures />} />
        <Route path="/school items" element={<SchoolItems />} />
        <Route path="/home items" element={<HomeItems />} />
          
      </Routes>
    </HashRouter>
  );
}

export default App
