import { Route, Routes} from 'react-router-dom';
import PageLayout from 'layouts/PageLayout';
import HomePage from 'pages/HomePage';
import AboutUs from './pages/AboutUs';
import { CustomizePlan } from './pages/CustomizePlan';
import { Workout } from 'pages/Workout';

function App() {

return (
<>
<Routes>
<Route path="/" element={<PageLayout />}>
<Route index element={<HomePage />} />
<Route path="about" element={<AboutUs />} />
<Route path="customizeplan" element={<CustomizePlan />} />
<Route path="workout" element={<Workout />} />

</Route>
</Routes>
</>

);

}



export default App;
