import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import './App.css';
import AddNewPerson from './components/js/AddNewPerson';
import Header from './components/js/Header';
import Retrieve from './components/js/Retrieve';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<AddNewPerson/>}/>
        <Route path='/retrieve' element={<Retrieve/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
