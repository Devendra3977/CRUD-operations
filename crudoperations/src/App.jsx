import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Read from "./Components/Read";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
