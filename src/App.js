import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Check from "./Components/Check/check";
import Exam from "./Components/Exam/exam";
import Ept from "./Components/Ept/ept";
import Settings from "./Components/Settings/settings";
import Dashboard from "./Components/Dashboard/dashboard";
function App() {
  return (
    <Routes>
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
   </Routes>
  );
}
export default  App;