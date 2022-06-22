import React, {useState, useContext, useEffect} from 'react';
import { UserNameContext } from 'contexts/UserNameContext';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import { OptionModal } from './OptionModal';

function DisplayHistory() {
    const navigate = useNavigate();
    const [userName, setUserName] = useContext(UserNameContext);
    
    const [histories, setHistories] = useState([]);
    
    const [selectedHistory, setSelectedHistory] = useState([]);

    const [showOptions, setShowOptions] = useState(false);

    const [yourPlan, setYourPlan] = useState([]);
    const url = process.env.REACT_APP_SERVER_URL  ||'http://localhost:3001'
    const show = () => {        
        fetch(url+"/history/get", {
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
        });
    };
    useEffect(() => {
        show();
    }, [])

    const handleUsePlanButton = (history) => {
        setSelectedHistory(history);
        setYourPlan(history.exercise_records);
        setShowOptions(true);
    }
    
    return (
        <>
        <Table responsive='true' className="text-secondary">
            <thead>
                <tr>
                <th>Workout history</th>
                <th>Date and time</th>
                <th>Comment</th>
                <th>Photo</th>
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
                        <td>{history.photo? <img src={url+"/"+history.photo} alt="" width={250} height={250} />:''}</td>
                        <td>
                        <Button variant="outline-warning" onClick={()=>{
                            handleUsePlanButton(history);
                            }} >Use this plan</Button></td>
                    </tr>
                })}      
            </tbody>
        </Table>
        <OptionModal show={showOptions} onHide={() => setShowOptions(false)} comment={selectedHistory.comment} yourPlan={yourPlan} setYourPlan={setYourPlan}/>
        </>
    )
}

export default DisplayHistory;
