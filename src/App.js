import { CustomizePlan } from './pages/CustomizePlan';
import {Route, Routes} from 'react-router-dom';
import {Workout} from './pages/Workout';
import PageLayout from './layouts/PageLayout';
import HomePage from 'pages/HomePage';
import AboutUs from './pages/AboutUs';
import PostWorkout from './pages/PostWorkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/customizeplan" element={<CustomizePlan />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/postworkout" element={<PostWorkout />} />
      </Route>
    </Routes>
  );
}

export default App;
