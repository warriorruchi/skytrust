import "./App.css";
import Pagecard from "./Componant/Product Page/Productpage";
import Download from "./Componant/Download Page/Download";
import Pricing from "./Componant/Pricing Page/pricing";
import { Route, Routes, NavLink } from "react-router-dom";


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="nav-link" activeClassName="active">Product</NavLink>
          </li>

          <li>
            <NavLink to="/download" className="nav-link" activeClassName="active">Download</NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className="nav-link" activeClassName="active">Pricing</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<Pagecard />} />
        <Route path="/download" exact element={<Download />} />
        <Route path="/pricing" exact element={<Pricing />} />
      </Routes>
    </>

  );
}

export default App;
