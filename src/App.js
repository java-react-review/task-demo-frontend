import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/common/nav-component";
import NewTask from "./components/new-task/new-task-component";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import AllTasks from "./components/all-tasks/all-tasks-component";

function App() {
  return (
    <div className="container">
      <Router>
        <Header></Header>
        <hr />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/tasks" element={<AllTasks />} exact />
            <Route path="/new" element={<NewTask />} exact />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
