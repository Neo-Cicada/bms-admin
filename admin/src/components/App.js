import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Equipment from './Equipment';
import Certificate from './Certificate'
import Facility from './Facility'
import Enrollment from './Enrollment'
function App() {

  return (
    
    
    <Router>
      
      
          <Routes>                   
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
            <Route path="/equipment" element={<Equipment/>}/>
            <Route path="/facility" element={<Facility/>}/>
            <Route path="certificate" element={<Certificate/>}/>
            <Route path="/enrollment" element={<Enrollment/>}/>
            <Route path="/equipment" element={<Equipment/>}/>


          </Routes>
    </Router>
  );
}

export default App;
