import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { AdjustButton, Weight } from './Weight';
export function YourPlan(props){
    const yourPlan = props.yourPlan; 
    const setYourPlan = props.setYourPlan; 
    let count = 1;

    const handleDelete = (index) => {
        count--;
        const newList = yourPlan;
        newList.splice(index, 1);
        setYourPlan([...newList]);
        console.log(yourPlan);
    }

    return <div className="col-8">
    <h4>Your Plan</h4>
    <Table striped bordered hover responsive="true">
        <thead>
            <tr>
            <th>#</th>
            <th>Exercise name</th>
            <th>Weight</th>
            <th>Rep</th>
            <th>Set</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {yourPlan.map((item, index)=>{
                return <tr key={item.exercise.id}>
                <td>{count++}</td>
                <td>{item.exercise.name}</td>
                <td><AdjustButton item={item.weight} kg="kg"/></td>
                <td><AdjustButton item={item.rep} kg=""/></td>
                <td><AdjustButton item={item.set} kg=""/></td>
                <td><Button onClick={()=>handleDelete(index)}>delete</Button></td>
                </tr>
            })}
        </tbody>
        </Table>
    <Button >Start</Button>
    </div>
}