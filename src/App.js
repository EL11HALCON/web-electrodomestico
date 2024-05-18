import './App.css';
import { BrowserRouter as router,Switch,Route  } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Categoria from './pages/Categoria';
import contacto from './pages/contacto';





function App() {
  return (
    <div className="App">
      <router>
        <Nav/>
      </router>
    </div>
  );
}

export default App;
