import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Routes from "./routes";
import Home from "./Home";
import Login from "./Login";
import Admin from "./Admin";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />

              <PublicRoute path="/Login" component={Login} />
              <PrivateRoute path="/Home" component={Home} />
              <PublicRoute path="/Admin" component={Admin} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;