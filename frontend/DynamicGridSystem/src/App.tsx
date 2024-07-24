import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Grid from "./pages/Grid";

const App=()=> {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/grid" element={<Grid />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
