import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Login from './Login';
import Register from './Register';
import Nav from './Components/navbar';

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Nav/>
        <Routes>
          <Route path="/" element={<Navigate to="/Home"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
