import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Inicial from "./pages/inicial/App";

// Comando para installar: npm install react-router-dom
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inicial/" element={<Inicial />}></Route>
    </Routes>
  );
}

export default AppRouter;
