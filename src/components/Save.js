import Button from 'react-bootstrap/Button';
import React, {useState, useContext, useEffect} from 'react';
import { UserNameContext } from 'contexts/UserNameContext';
import {useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function Save(props) {
    let navigate = useNavigate();
    const [userName, setUserName] = useContext(UserNameContext);
    
    const yourPlan = JSON.parse(window.sessionStorage.getItem('yourPlan'));
    const comment = props.comment;

    const [photo, setPhoto] = useState([]);
    const onPhotoChange = (e) => {
      console.log(e.target.files[0])
      setPhoto(e.target.files[0]);
    }
    const handleOnClick = (event) => {

     let data = new FormData();
     data.append('username', userName);
     data.append('comment', comment);
     data.append('date', new Date());
     data.append('photo', photo);
     data.append('exercise_records', JSON.stringify(yourPlan));


        fetch("http://localhost:3001/history", {
        method: "POST",
        body: data,
        // body: JSON.stringify({//pass the value of input field here
        //   username: userName,
        //   comment: comment,
        //   date: new Date(),
        //   photo: photo,
        //   exercise_records: yourPlan,
        // }),
        // headers: {
        //   "Content-type": "application/json; charset=UTF-8",
        // },
      })
        .then((data) => data.json());
      
      navigate('/');

    }
    useEffect(() =>{
      console.log(photo);
    },[photo])

    return (
        <div className="container col-6">
        <Form encType="multipart/form-data">
          <Form.Label htmlFor="photo">Upload photo</Form.Label>
          <Form.Control type="file" name="photo" accept=".png, .jpg, .jpeg" onChange={onPhotoChange} />
        
        <br/>
        <Button variant="warning" onClick={handleOnClick}>Save</Button>
        </Form>
        </div>
        
    )
}

export default Save;