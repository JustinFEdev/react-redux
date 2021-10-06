import "./App.css";
// import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Display from "./components/Display";
// import Views from "./components/Views";
import LandingPage from "./components/views/landingpage/LandingPage";
import LoginPage from "./components/views/loginpage/LoginPage";
import RegisterPage from "./components/views/registerpage/RegisterPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/loginPage" component={LoginPage} />
          <Route path="/registerPage" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
