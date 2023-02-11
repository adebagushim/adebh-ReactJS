import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Belajar React Routing</h1>

      <nav>
        <Link to="./home" className="menu">
          Home
        </Link>
        <Link to="./about" className="menu">
          About
        </Link>
        <Link to="./category/Makanan" className="menu">
          Makanan
        </Link>
        <Link to="./category/Minuman" className="menu">
          Minuman
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
