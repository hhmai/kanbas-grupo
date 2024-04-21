import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Login from './Login';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
