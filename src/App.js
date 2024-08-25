import './App.css';

//import Default from "./screens/Default";
import Navbar from "./components/Navbar"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    //desarrollo-frontend-react
    // <div className="App">
    //     <Navbar />
    //     <Outlet/>
    // </div>
    <>
      <Navbar />
      <Outlet/>
    </>
  );
}

export default App;
