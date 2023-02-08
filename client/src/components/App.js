import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./Signup/main";
import Login from "./Login";
import Home from "./Home";

export default function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path ="/signup" element={<SignUp/>} />
          <Route path ="/login" element={<Login/>} />
        </Routes>
      </Router>

    </div>
  );
}

