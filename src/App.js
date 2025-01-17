
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/view/About';
import Second from './components/view/Second';
import Herder from './components/common/Herder';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/Second' element={<Second />} />
        </Routes>
      </BrowserRouter>
      <Herder />
    </>
  )
}

export default App;
