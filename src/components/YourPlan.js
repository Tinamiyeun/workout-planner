import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdjustButton } from './AdjustButton'
import Instructions from 'components/Instructions'
;
export function YourPlan(props){
    const [yourPlan, setYourPlan] = useState(props.yourPlan);
    //let yourPlan = props.yourPlan; 
    //let setYourPlan = props.setYourPlan; 
    let count = 1;

    const handleDelete = (index) => {
        count--;
        const newList = yourPlan;
        newList.splice(index, 1);
        //setYourPlan([...newList]);
        setYourPlan([...newList]);
    }

    const navigate = useNavigate();
    const handleStartButton = () => {
        navigate("/workout");
    }

    useEffect(()=>{
        console.log(yourPlan);
        window.sessionStorage.setItem('yourPlan', JSON.stringify(yourPlan));
    },[yourPlan, setYourPlan]);

    return (
        <div className="col-12">
            <h4>Your Plan</h4>
            <Instructions />
            <Table striped bordered hover responsive="true">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th width="45%">Exercise name</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Rep</th>
                    <th scope="col-2">Set</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {yourPlan.map((item, index) => {
                    return (
                        <tr key={item.exercise.id}>
                            <td>{count++}</td>
                            <td>{item.exercise.name}</td>
                            <td><AdjustButton item={item.weight} kg="kg"/></td>
                            <td><AdjustButton item={item.rep} kg=""/></td>
                            <td><AdjustButton item={item.set} kg=""/></td>
                            <td><Button onClick={() => handleDelete(index)} className="btn-danger">delete</Button></td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>

            <Button variant="warning" className="btn btn-lg" onClick={handleStartButton}>Start</Button>
        </div>
    )
}