import './App.css'
import { BrowserRouter as Router, Routes, Route } 
from 'react-router-dom';
import MainLayout from './components/MainLayout';
// componentes que se van a mostrar
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div className="App">
    <Router basename="/react-router-spa-adl"> {/* Enrutamiento */}
      <Routes> 
        <Route path="/" element={<MainLayout/>} >
          <Route index element={<HomePage/>}/>
          <Route path="contacto" element={<ContactPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes> 
    </Router> {/* Enrutamiento fin */}
    </div>
  )
}

export default App
