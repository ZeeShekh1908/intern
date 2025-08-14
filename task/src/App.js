import { useState } from "react";
import './App.css';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import Dashboard from './components/Dashboard'; 
import EmployeeListPage from "./components/EmployeeListPage";

function App() {
  const [screen, setScreen] = useState("login"); 
  return (
    <>
      {screen === "login" && (
        <LoginScreen
          onSignUpClick={() => setScreen("signup")}
          onLoginSuccess={() => setScreen("dashboard")}
        />
      )}
      {screen === "signup" && (
        <SignUpScreen
          onLoginClick={() => setScreen("login")}
        />
      )}
      {screen === "dashboard" && (
        <Dashboard onLogout={() => setScreen("login")} />
      )}
    </>
  );
}

export default App;
