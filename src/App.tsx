import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GravityIntro } from './components/GravityIntro';
import { Home } from './pages/Home';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GravityIntro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
