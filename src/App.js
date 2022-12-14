import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About'
import Housing from './pages/housing/Housing';
import Error from './pages/error_page/Error';


function App() {
  return (
    <div className='app'>
      
      <BrowserRouter>
       <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/logement/:id' element={<Housing />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
