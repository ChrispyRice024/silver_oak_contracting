
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

//Pages
import Header from './components/Header'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="header">
        <Header/>
      </header>
      <div id='content'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
