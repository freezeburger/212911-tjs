import 'bootstrap/dist/css/bootstrap.min.css';
import { ViewHome, ViewList , ViewDetail} from './components/views';

import { BrowserRouter, Routes, Route } from "react-router-dom";

console.groupCollapsed('Consommation des varibales d\'environnement')
console.table(process.env);
console.groupEnd();

function App() {
  return (
    <div className="App">
      CAPTAIN HOOK

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<ViewHome></ViewHome>} />
          <Route path="/list" element={<ViewList></ViewList>} />
          <Route path="/detail" element={<ViewDetail></ViewDetail>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
