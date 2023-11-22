import './App.css';
import { Route,Routes } from 'react-router-dom'
import All from './Components/Task/All'
import Navbar from './Components/Task/Navbar'
import Fsd from './Components/Task/Fsd'
import Ds from './Components/Task/Ds'
import Cb from './Components/Task/Cb'
import Career from './Components/Task/Career'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<All/>}/>
        <Route path='/all' element={<All/>}/>
        <Route path='/fsd' element={<Fsd/>}/>
        <Route path='/ds' element={<Ds/>}/>
        <Route path='/cb' element={<Cb/>}/>
        <Route path='/career' element={<Career/>}/>
      </Routes>
    </div>
  );
}

export default App;
