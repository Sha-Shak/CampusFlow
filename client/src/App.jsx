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
import CreateStudent from './components/CandidateList/CreateStudentModal';
import MarkStudent from './components/MarkStudents/MarkStudent';
import RepoAccess from './pages/RepoAccess.page';
import Dashboard from './pages/Dashboard.page';
import CurriculumComponent from './pages/Curriculum.page';
import CohortStudents from './components/Cohorts/CohortStudents';
import Cohorts from './pages/Cohorts.page';
import SkillsRadarChart from './components/StudentInfo/SkillsRadarChart';
import StudentInfo from './pages/StudentInfo';
import MarkStudents from './pages/MarkStudents.page';
import AddSkill from './pages/AddSkills.page';
import MigrateStudents from './pages/MigrateStudents.page';
import PeerRatings from './pages/PeerRatings.page';

import AlumniInfoCard from './components/AlumniComponents/AlumniInfoCard';
import AlumniSidebar from './components/AlumniComponents/AlumniSidebar';
import ProjectCard from './components/AlumniComponents/ProjectCard';
import SiteChip from './components/AlumniComponents/SiteChip';
import Experience from './components/AlumniComponents/Experience';
import ProjectSection from './components/AlumniComponents/ProjectSection';
import SelectIndustry from './components/AlumniComponents/SelectIndustry';
import LanguageStats from './components/AlumniComponents/LanguageStats';
import AlumniProfile from './pages/AlumniProfile.jsx';
import Portfolio from './components/alumniComponents/Portfolio';
import GithubGraph from './components/alumniComponents/GithubGraph';
import useZoom from './hooks/useZoom';
import useAuthCheck from './hooks/useAuthCheck';
import AlumniUpdateProfile from './pages/AlumniUpdateProfile.page';
function App() {
  // const zoomLevel = useZoom();
  const authChecked = useAuthCheck();
  return !authChecked ? (
    // <Spinner size={'xl'}></Spinner>
    <div />
  ) : (
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
          <Route path="peerratings" element={<PeerRatings />} />
          <Route path="/cohorts" element={<Cohorts />}></Route>
          <Route
            path="/cohorts/:cohort/students/"
            element={<CohortStudents />}
          />
          <Route path="/student/:id" element={<StudentInfo />} />
          <Route path="/addSkills" element={<AddSkill />} />
          <Route path="/migratestudents" element={<MigrateStudents />} />
          <Route path="/repoAccess" element={<RepoAccess />} />
          <Route path="test" element={<SkillsRadarChart />} />
          <Route path="/alumni/info" element={<AlumniInfoCard />} />
          <Route path="/alumni/sidebar" element={<AlumniSidebar />} />
          <Route path="/alumni/profileChip" element={<ProjectCard />} />
          <Route path="/alumni/chip" element={<SiteChip />} />
          <Route path="/alumni/experience" element={<Experience />} />
          <Route path="/alumni/portfolio" element={<Portfolio />} />
          <Route path="/alumni/profile" element={<AlumniProfile />} />
          <Route
            path="/alumni/update-profile"
            element={<AlumniUpdateProfile />}
          />
          <Route path="/search" element={<SelectIndustry />} />
          <Route path="/languageStats" element={<LanguageStats />} />
          <Route path="/graph" element={<GithubGraph />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
