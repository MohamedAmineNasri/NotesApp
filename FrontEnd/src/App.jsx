import UnsentMsg from "./components/TheUnsent/UnsentMsg"
import Home from "./pages/Home/Home"
import HomePage from "./pages/Home/HomePage"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
 
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/theunsentmsg" element={<UnsentMsg/>} />
          <Route path="/dashboard" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
