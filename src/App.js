import './App.css';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <h1>BELAJAR REACT ROUTER</h1>
      <nav>
        <Link to={"Makanan"}> MAKANAN </Link>
        <Link to={"Minuman"}> MINUMAN</Link>
        <Link to={"Cemilan"}> CEMILAN</Link>
      </nav>
        

        <Outlet />
    </div>
  
  );
}

export default App;
