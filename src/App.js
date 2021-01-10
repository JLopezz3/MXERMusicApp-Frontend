import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import Dashboard from "./pages/Dashboard/Dashboard";
import HeaderTwo from "./components/HeaderTwo/HeaderTwo";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profileInfo">
            <ProfileInfo />
          </Route>
          <Route path="/dashboard">
            <HeaderTwo />
            <Dashboard />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
