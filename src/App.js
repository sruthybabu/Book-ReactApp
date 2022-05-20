import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Addbook from './components/Addbook';
import ViewBook from './components/ViewBook';
function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
<Route path="/" exact element={<Login/>}/>
<Route path="/regiser" exact element={<Register/>}/>
<Route path="/add" exact element={<Addbook/>}/>
<Route path="/view" exact element={<ViewBook/>}/>
</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
