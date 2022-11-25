import './App.css';
import Body from './components/Body/Body';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Body/>
      </BrowserRouter>
    </div>
  );
}

export default App;
