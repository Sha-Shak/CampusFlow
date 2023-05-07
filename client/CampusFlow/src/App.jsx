import './App.css';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import LoginPage from './pages/Login.page';
import RedirectOAuth from './pages/RedirectOAuth.page';
import TypeForm from './pages/TypeForm.page';
import CandidateList from './pages/CandidateList';
import SideBar from './components/SideBar';
import CreateStudent from './components/CreateStudent';
import MarkStudent from './components/MarkStudent';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
          <Route path="/redirect/auth" element={<RedirectOAuth />} />

          <Route
            path="/candidate"
            element={
              <SideBar>
                <CandidateList />{' '}
              </SideBar>
            }
          />
          <Route path="/createStudent" element={<MarkStudent />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
