import React, {useState, useContext, useEffect} from 'react';
import { UserNameContext } from 'contexts/UserNameContext';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function DisplayHistory() {

    const [userName, setUserName] = useContext(UserNameContext);
    // React.useEffect(() => {
    //     console.log({userName})       
    //     }) 
    const [histories, setHistories] = useState([]);

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

    return (
        <>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Workout history</th>
                <th>Comment</th>
                <th>Date and time</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {histories.map((history) =>{
                    return <tr key={history.id}>
                        <td><ul>{history.exercise_records.map((record)=>{
                            return <li>{record.exercise.name}</li>
                        })}</ul></td>
                        <td>{history.comment}</td>
                        <td>{history.date}</td>
                        <td><Button variant="warning">Use this plan</Button></td>
                    </tr>
                })}      
            </tbody>
        </Table>
        </>
    )
}



export default DisplayHistory;