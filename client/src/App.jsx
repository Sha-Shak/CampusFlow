import './App.css';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import LoginPage from './pages/Login.page';
import RedirectOAuth from './pages/RedirectOAuth.page';
import CandidateList from './pages/CandidateList';
import CreateStudent from './components/CreateStudentModal';
import MarkStudent from './components/MarkStudent';
import RepoAccess from './components/RepoAccess';
import Dashboard from './pages/Dashboard.page';
import CurriculumComponent from './pages/Curriculum.page';
import CohortStudents from './components/CohortStudents';
import Cohorts from './pages/Cohorts.page';
import SkillsRadarChart from './components/SkillsRadarChart';
import StudentInfo from './pages/StudentInfo';
import MarkStudents from './pages/MarkStudents.page';
import AlumniInfoCard from './components/alumniComponents/AlumniInfoCard';
import AlumniSidebar from './components/alumniComponents/AlumniSidebar';
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
          <Route path="/markstudents" element={<MarkStudents />} />
          <Route path="/cohorts" element={<Cohorts />}></Route>
          <Route
            path="/cohorts/:cohort/students/"
            element={<CohortStudents />}
          />
          <Route path="/student/:id" element={<StudentInfo />} />
          <Route path="/repoAccess" element={<RepoAccess />} />
          <Route path="test" element={<SkillsRadarChart />} />
          <Route path="/alumni/info" element={<AlumniInfoCard />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
