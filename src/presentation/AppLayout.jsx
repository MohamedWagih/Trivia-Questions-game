import { Categories, NotFound, Questions, Score, Welcome } from 'presentation/screens';
import { Route, Routes } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/score" element={<Score />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default AppLayout;
