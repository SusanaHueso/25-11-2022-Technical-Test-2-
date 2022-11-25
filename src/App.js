import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {Home} from './containers/Home/Home'
import {Header} from './containers/Header/Header'

function App() {
  return (
 
      <BrowserRouter>
         <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>   
        </Routes>

      </BrowserRouter>
  
      
  );
}

export default App;
