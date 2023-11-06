import "./App.css"
import Formulaire  from "./screens/Formulaire";
import { CV } from "./screens/CV"
import {Routes,Route,NavLink} from "react-router-dom";

function App(){
  return (
    <div className="back">
      <Routes>
        <Route path="/" element={ <CV/>}/>
        <Route path="/Formulaire" element={ <Formulaire/> } />
      </Routes>
    </div>
   
  );
}

export default App;
