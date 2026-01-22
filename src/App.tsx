import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { MainScreen } from "./components/MainScreen/MainScreen";
import { Animals } from "./components/Animals/Animals";
import { Fruits } from "./components/Fruits/Fruits";  
import { Vege } from "./components/Vege/Vege";
import { Colors } from "./components/Colors/Colors";
import { Days } from "./components/Colors copy/Days";

function App() {


   return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/vegetables" element={<Vege />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/days" element={<Days />} />
      </Routes>
    </HashRouter>
  );
}

export default App
