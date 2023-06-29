import "./App.css";
import { Routes, Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import RideDetailsPage from "./pages/RideDetailsPage";
import EditRidePage from "./pages/EditRidePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/isPrivate";
import IsAnon from "./components/isAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        
        <Route path="/" element={<HomePage />} />

        <Route
          path="/rides"
          element={
            <IsPrivate>
              <ExplorePage />
            </IsPrivate>
          }
        />

        <Route
          path="/rides/:ridesId"
          element={
            <IsPrivate>
              <RideDetailsPage />
            </IsPrivate>
          }
        />

        <Route
          path="/rides/edit/:ridesId"
          element={
            <IsPrivate>
              <EditRidePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
