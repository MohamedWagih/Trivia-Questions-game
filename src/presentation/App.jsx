import { Routes, Route } from 'react-router-dom';
import { Welcome, NotFound } from './screens';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
