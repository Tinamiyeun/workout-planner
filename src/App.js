import { CustomizePlan } from './pages/CustomizePlan';
import {Route, Routes} from 'react-router-dom';
import {Workout} from './pages/Workout';

function App() {
  return (
    <Routes>
      <Route path="/customizeplan" element={<CustomizePlan />} />
      <Route path="/workout" element={<Workout />} />
    </Routes>
  );
}

export default App;
