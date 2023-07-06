import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/home"
import Login from './Component/login';
import Register from './Component/register';
import Profile from './Component/profile';
import Admin from './Component/admin';
import AuthVerify from './common/auth-verify';
import AuthService from './services/auth.service';
function App() {

const logOut = ()=>{
  AuthService.logout()
}

  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/Register" element={<Register />}></Route>
    <Route path="/Profile" element={<Profile />}></Route>
    <Route path="/Admin" element={<Admin />}></Route>
  </Routes>
  <AuthVerify logOut={logOut}/>

</BrowserRouter>

    </div>
  );
}

export default App;
