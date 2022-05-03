import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Check from "./Components/Check/check";
import Exam from "./Components/Exam/exam";
import Ept from "./Components/Ept/ept";
import Settings from "./Components/Settings/settings";
import Dashboard from "./Components/Dashboard/dashboard";
function App() {
  return (
    <BrowserRouter>
  
   <Routes>
     <Route path="/" element={<Ept />}/>
     <Route path="exam" element={<Exam />}/>
     <Route path="dashboard" element={<Dashboard />}/>
     <Route path="check" element={<Check />}/>
     <Route path="settings" element={<Settings />}/>
     </Routes>
 </BrowserRouter>
  );
}
export default  App;