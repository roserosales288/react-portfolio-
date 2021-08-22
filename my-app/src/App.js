import logo from './logo.svg';
import './App.css';
import Blackbar from './components/blackBar'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import About from './pages/aboutme'
function App() {
  return (
    <div className="App">
      <Blackbar/>
      <Navbar/>
       <Router>
           <Route exact path='/' component={About} />
         
         
         
         
         </Router>    
             
    </div>
  );
}

export default App;
