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
import CreateStudent from './components/CreateStudentModal';
import MarkStudent from './components/MarkStudent';
import AddSkill from './components/AddSkill';
import RepoAccess from './components/RepoAccess';
import CreateCohort from './components/CreateCohortModal';
import TestModal from './pages/TestModal';
import Dashboard from './pages/Dashboard.page';
import CurriculumComponent from './pages/Curriculum.page';
import CohortStudents from './components/CohortStudents';
import Cohorts from './pages/Cohorts.page';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/redirect/auth" element={<RedirectOAuth />} />
          <Route path="/curriculum" element={<CurriculumComponent />} />

          <Route path="/candidates" element={<CandidateList />} />
          <Route path="/createStudent/:id" element={<CreateStudent />} />
          <Route path="/markStudent/:id/:week" element={<MarkStudent />} />
          <Route path="/cohorts" element={<Cohorts />} />
          <Route path="/repoAccess" element={<RepoAccess />} />
          <Route path="test" element={<CohortStudents />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
