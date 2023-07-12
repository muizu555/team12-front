
import './App.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Register from './pages/register/Regiser';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



//もしかしたら大変な間違いを犯してしまったかもしれません　ホームのパスが/:idなのかもしれない　このアプリでは、("/")というpathは存在しないのかもしれません

 //多分userIdを返せばいけるはずです//
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home />}/> 
        <Route path="/register" element = {<Register />}/>
        <Route path="/login" element = {<Login/>}/>
      </Routes>
    </Router>
  );
}




export default App;
