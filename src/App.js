import { CustomizePlan } from './components/CustomizePlan';
import {Route, Routes, Navigate} from 'react-router-dom';
import LoggedIn from 'pages/LoggedIn';


function App() {
  return (
    <Routes>
      <Route path="/customizeplan" element={<CustomizePlan />} />
      <Route path="/loggedin" element={<LoggedIn />} />
    </Routes>
  );
}

export default App;
