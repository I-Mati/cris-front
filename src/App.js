import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import SuccessPage from "./components/SuccessPage";
import LeadEnrollmentPage from "./components/LeadEnrollmentPage";
import LeadDetailPage from "./components/LeadDetailPage";
import EnrollmentPage from "./components/EnrollmentPage";
import NotFoundPage from "./components/NotFoundPage";
import {
  HOME,
  NOT_FOUND,
  ENROLL,
  LEAD,
  LEAD_ENROLLMENT,
  SUCCESS,
} from "./constants/paths";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={LEAD_ENROLLMENT} element={<LeadEnrollmentPage />} />
        <Route path={LEAD} element={<LeadDetailPage />} />
        <Route path={ENROLL} element={<EnrollmentPage />} />
        <Route path={SUCCESS} element={<SuccessPage />} />
        <Route path={NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
