import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/Login'
import { Home } from './pages/Home'
import './styles/App.css'

function App() {
  
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Login" element={<LoginPage/>} />
      </Routes>
      
    </div>
      
    </BrowserRouter>
  )
}

export default App
