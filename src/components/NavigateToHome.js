import {useNavigate} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function NavigateToHome () {
    const navigate = useNavigate();
    
    alert('You need to login to have access to this page.');
    <Navigate to='/login' />
    
}

export default NavigateToHome;