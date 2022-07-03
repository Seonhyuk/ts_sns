import { User } from "firebase/auth";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Navigation from "./Navigation";

interface IsLoggedIn {
  isLoggedIn: User | boolean;
}

const AppRouter = ({ isLoggedIn }: IsLoggedIn): JSX.Element => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;