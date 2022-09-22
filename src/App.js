import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Componentes/Home.js';
import PaginaPrincipal from './Componentes/PaginaPrincipal.js';
import PerroId from './Componentes/PerroId';
import CreateDog from './Componentes/CreateDog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path={'/'} component={Home} />
        <Route path={'/home'} component={PaginaPrincipal} />
        <Route exact path={'/dog/:id'} component={PerroId} />
        <Route path={'/createdog'} component={CreateDog} />
      </div>
    </BrowserRouter>
  );
}

export default App;
