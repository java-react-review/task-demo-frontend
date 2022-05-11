import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/nav-component';
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import React from 'react';


function App() {
  return( <div className="container">
  <Router>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Outlet/>}>
        <Route path="/tasks" element={<React.Fragment><p>tasks</p></React.Fragment>} exact />
        <Route path="/new" element={<React.Fragment><p>new</p></React.Fragment>} exact />
      </Route>
    </Routes>
  </Router>
</div>)
}

export default App;
