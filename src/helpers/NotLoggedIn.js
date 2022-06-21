import {useNavigate} from 'react-router-dom';


function NotLoggedIn() {
    const navigate = useNavigate();
    alert('You must log in to see this page.');
    navigate('/login');
}

export default NotLoggedIn;