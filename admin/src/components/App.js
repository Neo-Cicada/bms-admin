import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        

        <section>

          <Routes>                   
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
