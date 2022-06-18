import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Timer } from './Timer';

export function PlanList(){
    const yourPlan = window.sessionStorage.getItem('yourPlan');
    const [currentExc, setCurrentExc] = useState({
        exc: 0,
        set: 0
    })
    const plan = JSON.parse(yourPlan);

    // useEffect(() =>{
    //     console.log(currentExc);
    // },[currentExc])


    return <div className='p-3'>
                <div className='row'>
                    <div className='col-md-3'>
                            <h4 className='text-center border p-2'>Your Plan</h4>
                            <div style={{overflowY: 'scroll',height: '90vh'}}>
                                {plan.map((item, excIndex) => {
                                    return <div className='mt-2 p-2' key={item.exercise.id}>
                                                <div className='d-flex justify-content-between border p-2'>
                                                    <span><strong>{item.exercise.name}</strong></span> <span>{item.set} sets</span>
                                                </div>
                                                <Table className='table-borderless m-0 mt-1 border text-secondary'>
                                                    <tbody  className='planlist-table'>
                                                        {[...Array(item.set)].map((temp, j) => {
                                                            // how to make key unique, item.exercise.id + j
                                                            return <tr key={item.exercise.id + j} className={currentExc.exc === excIndex && currentExc.set === j ? 'bg-warning' : ''}>

                                                                <td>{j + 1}</td>
                                                                <td>{item.weight} kg</td>
                                                                <td>{item.rep} reps</td>
                                                            </tr>
                                                        })}
                                                    </tbody>
                                                </Table>
                                            </div>
                                })}
                            </div>
                    </div>
                    <Timer currentExc={currentExc} setCurrentExc={setCurrentExc} plan={plan} />
                </div>
            </div>
}