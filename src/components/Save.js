import Button from 'react-bootstrap/Button';
import React, {useState, useContext} from 'react';
import { UserNameContext } from 'contexts/UserNameContext';
import {useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import UploadPhoto from './UploadPhoto';

function Save(props) {
    let navigate = useNavigate();
    const [userName, setUserName] = useContext(UserNameContext);

    React.useEffect(() => {
        console.log({userName})       
        })    
    
    const yourPlan = JSON.parse(window.sessionStorage.getItem('yourPlan'));
    const comment = props.comment;

    const [photo, setPhoto] = useState('');
    

    React.useEffect(() => {
      console.log(photo);
    })
    
    
    const handleOnClick = (event) => {
      
        fetch("http://localhost:3001/history", {
        method: "POST",
        body: JSON.stringify({//pass the value of input field here
          username: userName,
          comment: comment,
          date: new Date(),
          photo: photo,
          exercise_records: yourPlan,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((data) => data.json());
      
      navigate('/history');

    }
    

    return (
        <div className="container col-6">
        {/* <Form encType="multipart/form-data">
          <Form.Label htmlFor="image">Upload photo</Form.Label>
          <Form.Control type="file" name="photo" id="photo" />
        </Form> */}
        
        <UploadPhoto  photo={photo} setPhoto={setPhoto} />
        <br/>
        <Button variant="warning" onClick={handleOnClick}>Save</Button>
        </div>
        
    )
}

export default Save;