import './App.css'
import { BrowserRouter } 
from 'react-router-dom';
import Navbar from './components/Navbar';
import Router from './routes/index';

function App() {
  return (
    <div className="App">
    <BrowserRouter basename="/react-router-spa-adl">
      <Navbar/>
      <Router />
    </BrowserRouter>
    </div>
  )
}

export default App
