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
      </Routes>
    </HashRouter>
  );
}

export default App
