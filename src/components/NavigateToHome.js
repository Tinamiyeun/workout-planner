import {useNavigate} from 'react-router-dom';

function NavigateToHome () {
    const navigate = useNavigate();
    alert('You need to login to have access to this page.');
    navigate('/login');
}

export default NavigateToHome;