import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
import List from "./components/list/List";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
