import { CustomizePlan } from './components/CustomizePlan';
import {Route, Routes, Navigate} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/customizeplan" element={<CustomizePlan />} />
    </Routes>
  );
}

export default App;
