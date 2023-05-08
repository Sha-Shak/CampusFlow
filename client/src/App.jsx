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
import CreateStudent from './components/CreateStudentModal';
import MarkStudent from './components/MarkStudent';
import AddSkill from './components/AddSkill';
import RepoAccess from './components/RepoAccess';
import CreateCohort from './components/CreateCohortModal';
import TestModal from './pages/TestModal';
import Dashboard from './pages/Dashboard.page';
import CurriculumComponent from './pages/Curriculum.page';
function App() {
  return (
    <div className='bg-gray-200'>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/redirect/auth" element={<RedirectOAuth />} />
          <Route path="/curriculum" element={<CurriculumComponent />} />

          <Route
            path="/candidate"
            element={
                <CandidateList />
            }
          />
          <Route path="/createStudent/:id" element={<CreateStudent />} />
          <Route path="/markStudent/:id/:week" element={<MarkStudent />} />
          <Route path="/addSkill" element={<AddSkill />} />
          <Route path="/repoAccess" element={<RepoAccess />} />
          <Route path="/createCohort" element={<CreateCohort />} />
          <Route path="test" element={<TestModal />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
