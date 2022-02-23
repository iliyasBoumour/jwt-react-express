import { StoreProvider } from "./utils/store";
import User from "./pages/User";
import Admin from "./pages/admin";
import Login from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";
import IsAuth from "./components/IsAuth";
import AdminRoute from "./components/AdminRoute";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <StoreProvider>
      <Router>
        <nav style={{ display: "flex", gap: "2rem", paddingBottom: "2rem" }}>
          <Link to={"/user"}>User</Link>
          <Link to={"/admin"}>admin</Link>
          <Link to={"/login"}>login</Link>
        </nav>
        <Routes>
          <Route exact element={<IsAuth />}>
            {/* on peut ajouter les pages dont les users authentifie ne l'ont pas acces */}
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            {/* pages qui necessite un role user */}
            <Route path="/user" element={<User />} />
          </Route>
          <Route element={<AdminRoute />}>
            {/* pages qui necessite un role admin */}
            <Route path="/admin" exact element={<Admin />} />
          </Route>
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
