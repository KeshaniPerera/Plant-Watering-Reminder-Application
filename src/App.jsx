import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LogIn } from './pages/login.jsx'; 
import { SignUp } from './pages/signup.jsx'; 
import { Home } from './pages/home.jsx';
import { Notifications } from './pages/notifications.jsx';
import { Settings } from './pages/settings.jsx';


function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
