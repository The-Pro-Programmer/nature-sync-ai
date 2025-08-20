import './App.css';
import Home from './pages/Home';
import Questions from './pages/questions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App dark bg-gray-900 text-gray-100 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
