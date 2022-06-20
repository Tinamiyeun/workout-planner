import React, {useState, useContext, useEffect} from 'react';
import { UserNameContext } from 'contexts/UserNameContext';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
//import WeightModal from 'components/WeightModal';

function DisplayHistory() {
    let navigate = useNavigate();
    const [userName, setUserName] = useContext(UserNameContext);
    
    const [histories, setHistories] = useState([]);
    //const [showWeightModal, setShowWeightModal] = useState(false)

    // const [comment, setComment] = useState([]);
    const show = () => {        
        fetch("http://localhost:3001/history/get", {
            method: 'POST',
            body: JSON.stringify({
                username: userName
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8", 
            },
        })
        .then((data) => data.json())
        .then((json) => {setHistories(JSON.parse(JSON.stringify(json)))
            console.log(histories)
        });
    };
    useEffect(() => {
        show();
    }, [])

    const [selectRecord, setSelectRecord] = useState([]);

    // const getComment = () => {
    //     fetch("http://localhost:3001/history/get", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         id: histories._id,
    //     }),
    //     headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //     },
    // })
    //     .then((data) => data.json())
    //     .then((json) => {setComment(JSON.parse(JSON.stringify(json)))
    //         console.log(comment)
    //     });
    // };
    // useEffect(() => {
    //     getComment();
    // }, [])


    // function handleOnClick(){
    //     setSelectRecord();   
         // if(histories.comment === "too easy" ){  
        //     console.log(this.histories.comment) ;         
        //     alert("do you want to increase the weight?")
        // }else if(histories.comment === "too hard" ){ 
        //     alert("do you want to reduce the weight?")
        // }
    // }

    return (
        <>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Workout history</th>
                <th>Date and time</th>
                <th>Comment</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {histories.map((history) =>{
                    return <tr key={history.id}>
                        <td><ul>{history.exercise_records.map((record)=>{
                            return <li>{record.exercise.name}</li>
                        })}</ul></td>
                        <td>{history.date}</td>
                        <td>{history.comment}</td>
                        <td>
                        <Button variant="warning" onClick={()=>{
                            setSelectRecord({history});
                            alert({history});
                            }} >Use this plan</Button></td>
                    </tr>
                })}      
            </tbody>
        </Table>
        
        </>
    )
}




export default DisplayHistory;

// onClick={()=>{ 
//     if({history.comment} === "too easy" ){         
//         alert("do you want to increase the weight?")
//     }else if({comment} === "too hard" ){ 
//         alert("do you want to reduce the weight?")
//     }else{
//         navigate("/")
//     }
// }}