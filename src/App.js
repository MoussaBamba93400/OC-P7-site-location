import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About'
import Housing from './pages/housing/Housing';


function App() {
  return (
    <div className='app'>
      
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/logement/:id' element={<Housing />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
