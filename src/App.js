import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import SuccessPage from "./components/SuccessPage";
import LeadList from "./components/LeadList";
import LeadDetailPage from "./components/LeadDetailPage";
import RegistrationPage from "./components/RegistrationPage";
import NotFoundPage from "./components/NotFoundPage";
import {
  HOME,
  NOT_FOUND,
  REGISTRATION,
  LEAD,
  LEADS,
  SUCCESS,
} from "./constants/paths";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path={HOME} element={<HomePage />} />
          <Route path={LEADS} element={<LeadList />} />
          <Route path={LEAD} element={<LeadDetailPage />} />
          <Route path={REGISTRATION} element={<RegistrationPage />} />
          <Route path={SUCCESS} element={<SuccessPage />} />
          <Route path={NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
