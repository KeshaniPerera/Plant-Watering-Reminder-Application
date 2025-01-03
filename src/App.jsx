import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { LogIn } from './pages/login.jsx' 
import { SignUp } from './pages/signup.jsx' 

function App() 
{
  return (
    
    <Router>
      <Routes>
    <Route path="/" element={<LogIn />} />
    <Route path="/signup" element={<SignUp />} />
    </Routes>
  
    
    </Router>
  )
}

export default App
