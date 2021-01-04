import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

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
          <Route path="/dashboard">
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
