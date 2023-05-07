import './App.css'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import LoginPage from './pages/Login.page';
import RedirectOAuth from './pages/RedirectOAuth.page';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Navigate to="/login" /> } />
          <Route path="/login" element={ <LoginPage/> } />
          <Route path="/dashboard" element={ <div>Dashboard</div> } />
          <Route path="/redirect/auth" element={ <RedirectOAuth/> } />
          </Routes>
      </Router>
    </>
  )
}

export default App
