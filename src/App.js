import { BrowserRouter, Routes } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
import React from 'react';
import Check from "./Components/Check/check";
import Exam from "./Components/Exam/exam";
import Ept from "./Components/Ept/ept";
import Settings from "./Components/Settings/settings";
import Dashboard from "./Components/Dashboard/dashboard";
function App() {
  return (
    <Switch>
    <Route exact path="/">
    <Ept /> 
    </Route>
    <Route path="/bashboard">
    <Dashboard />
    </Route>
    <Route path="/check">
    <Check />
    </Route>
    <Route path="/exam">
    <Exam />
    </Route>
    <Route path="/settings">
    <Settings />
    </Route>
   </Switch>
  );
}
export default  App;