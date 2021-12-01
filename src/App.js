import 'bootstrap/dist/css/bootstrap.min.css';
import { ViewHome } from './components/views';

console.groupCollapsed('Consommation des varibales d\'environnement')
console.table(process.env);
console.groupEnd();

function App() {
  return (
    <div className="App">
        CAPTAIN HOOK
        <ViewHome></ViewHome>
    </div>
  );
}

export default App;
