import { Routes, Route } from "react-router-dom";
import AppTateti from './components/Tateti/AppTateti';
import AppMemory from './components/Memory/AppMemory';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Info from './components/Info/Info';

const App = () => {

  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/tateti" element={<AppTateti />}/>
      <Route path="/memory" element={<AppMemory />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/info" element={<Info />}/>
    </Routes>
  )

}

export default App;
