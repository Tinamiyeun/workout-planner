import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';

export function PlanList(){
    const yourPlan = window.sessionStorage.getItem('yourPlan');
    
    return <div className="col-3">
    <h4>Your Plan</h4>
    <Table bordered responsive="true">
        <thead>
        <td>Exercise Name</td>
        <td>Weight</td>
        <td>rep</td>
        <td>set</td>
        </thead>
        <tbody>
            {JSON.parse(yourPlan).map((item)=>{
            
                    return <tr key={item.exercise.id}>
                    <td>{item.exercise.name}</td>
                    <td>{item.weight}</td>
                    <td>{item.rep}</td>
                    <td>{item.set}</td>

                    </tr>
                
                
})}
        </tbody>
    </Table>
    </div>

    // return <>
    // {JSON.parse(yourPlan).map((item)=>{
    //     console.log(item)
    //     console.log(1)
    //     return <div>{item.exercise.name}</div>})}
    // </>

    // return <>
    // {[yourPlan].map((item)=>{
    //     {item.map((exercise)=>{
    //         return <div>{exercise}</div>
    //     })}
    // })}
    // </>
}