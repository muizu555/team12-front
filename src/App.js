
import './App.css';
import Home from './pages/home/Home';
import Register from './pages/register/Regiser';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



//もしかしたら大変な間違いを犯してしまったかもしれません　ホームのパスが/:idなのかもしれない　このアプリでは、("/")というpathは存在しないのかもしれません


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/register" element = {<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
