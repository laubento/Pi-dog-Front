import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Componentes/Home.js';
import PaginaPrincipal from './Componentes/PaginaPrincipal.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path={'/'} component={Home} />
        <Route path={'/home'} component={PaginaPrincipal} />
      </div>
    </BrowserRouter>
  );
}

export default App;
