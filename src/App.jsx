import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Selector from './pages/Selector.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/select" element={<Selector />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}
