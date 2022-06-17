import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';

export function PlanList(){
    const yourPlan = window.sessionStorage.getItem('yourPlan');
    
    // return <div className="col-3">
    // <h4>Your Plan</h4>
    // <Table striped bordered hover responsive="true">
    //         {yourPlan?.map((item)=>{
    //             return <tr key={item.exercise.id}>
    //             <td>{item.exercise.name}</td>
    //             <td>{item.weight}</td>
    //             <td>{item.rep}</td>
    //             <td>{item.set}</td>
    //             </tr>
    //         })}
    // </Table>
    // </div>

    return <>
    {[yourPlan].map((item)=>{
        console.log(item)
        console.log(1)
        return <div>{item}</div>})}
    </>

    // return <>
    // {[yourPlan].map((item)=>{
    //     {item.map((exercise)=>{
    //         return <div>{exercise}</div>
    //     })}
    // })}
    // </>
}