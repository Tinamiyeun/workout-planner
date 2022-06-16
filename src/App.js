import { CustomizePlan } from './pages/CustomizePlan';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/customizeplan" element={<CustomizePlan />} />
    </Routes>
  );
}

export default App;
