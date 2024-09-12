
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          
        </Route>
      </Routes>
    </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
