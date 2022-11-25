import './App.css';
import Body from './components/Body/Body';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {Home} from './containers/Home/Home'
import {Header} from './containers/Header/Header'

function App() {
  return (
 
      <BrowserRouter>
         <Header></Header>
        <Routes>
          <Route path='/' element={<Body/>}/>   
          <Route path='/Home' element={<Home/>}/>   
        </Routes>

      </BrowserRouter>
  
      
  );
}

export default App;
