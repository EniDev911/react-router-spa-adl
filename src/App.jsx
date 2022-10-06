import './App.css'
import { BrowserRouter as Router, Routes, Route } 
from 'react-router-dom';
import Navbar from './components/Navbar';
// componentes que se van a mostrar
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div className="App">
    <Router basename="/react-router-spa-adl">
      <Navbar/>
      <Routes> {/* Enrutamiento */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/contacto" element={<ContactPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes> {/* Enrutamiento fin */}
    </Router>
    </div>
  )
}

export default App
