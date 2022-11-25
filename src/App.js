import './App.css';
import Body from './components/Body/Body';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {Home} from './containers/Home/Home'
import {Header} from './containers/Header/Header'

function App() {
  return (
 
      <BrowserRouter>
         <Header></Header>
        <Routes>
          <Route path='/Body' element={<Body/>}/>   
          <Route path='/' element={<Home/>}/>   
        </Routes>

      </BrowserRouter>
  
      
  );
}

export default App;
