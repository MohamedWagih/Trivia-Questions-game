import { Routes, Route } from 'react-router-dom';
import { Welcome, NotFound, Categories } from 'presentation/screens';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
