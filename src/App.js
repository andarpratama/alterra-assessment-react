import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideLeft from './layouts/SideLeft';
import SideRight from './layouts/SideRight';
import Budget from './pages/Budget';
import Home from './pages/Home';
import Income from './pages/Income';
import Outcome from './pages/Outcome';
import Reminder from './pages/Reminder';

function App() {
  return (
    <Router>
      <div className='App'>
        <main className='home'>
          <div className='row'>
            <SideLeft />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/budget' element={<Budget />} />
              <Route path='/income' element={<Income />} />
              <Route path='/outcome' element={<Outcome />} />
              <Route path='/reminder' element={<Reminder />} />
            </Routes>
            <SideRight />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
