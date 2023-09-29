import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import SingleVideo from "./pages/SingleVideo";
import Ready from "./pages/Ready";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/video/:id" element={<SingleVideo />} />
          <Route path="/newvideo/:id" element={<Ready />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
