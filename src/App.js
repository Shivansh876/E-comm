import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpPage from "./pages/SignUpPage";
import VerifyEmail from "./pages/VerifyEmail";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/OpenRoute";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Overview from "./components/HomePage/Overview";

function App() {

  const { darkMode } = useSelector((state) => state.mode);

  return (
    <div className={`w-screen mx-auto min-h-screen flex flex-col font-inter ${darkMode ? "bg-richblack-900 " : "bg-white"}`}>
      <Navbar />

      <Routes>
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <SignUpPage />
            </OpenRoute>
          }
        />

        <Route
          path="/login"
          element={
            <OpenRoute>
              <LoginPage />
            </OpenRoute>
          }
        />

        <Route
          path="/"
          element={
            <Home />
          }
        />

        <Route
          path="/overview"
          element={
            <Overview />
          }
        />

        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          path="/cart"
          element={ 
              <Cart /> 
          }
        ></Route>

      </Routes>
    </div>
  );
}

export default App;
