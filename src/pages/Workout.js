import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export function Workout() {

    const yourPlan = window.sessionStorage.getItem('yourPlan');
    const [currentExc, setCurrentExc] = React.useState({
        exc: 0,
        set: 0
    });
    const [timer, setTimer] = React.useState(null);
    const [plan, setPlan] = React.useState([]);
    const [timeout, setTimeoutFunc] = React.useState(null);
    const navigate = useNavigate();
    const takeBreak = () => {
        if (currentExc.exc === plan.length - 1 && currentExc.set === plan[currentExc.exc].set - 1) {
            navigate('/');
        } else {
            setTimer(60);
        }
    }
    React.useEffect(() => {
        let _timeout = timer > 0 && setTimeout(() => {
            setTimer((timer) => {
                if (timer > 0) {
                    return timer - 1
                } else {
                    return null
                }
            });
        }, 1000)
        setTimeoutFunc(_timeout);
        if (timer === 0) {
            updateCurrent();
        }
    }, [timer])

    const skip = () => {
        setTimer(null);
        clearTimeout(timeout);
        updateCurrent();
    }

    const updateCurrent = () => {
        if (currentExc.set < plan[currentExc.exc].set - 1) {
            setCurrentExc({
                exc: currentExc.exc,
                set: currentExc.set + 1
            })
        } else if (currentExc.set === plan[currentExc.exc].set - 1 && currentExc.exc < plan.length - 1) {
            setCurrentExc({
                exc: currentExc.exc + 1,
                set: 0
            })
        }
    }

    React.useEffect(() => {
        console.log(currentExc)

    }, [currentExc])

    React.useEffect(() => {
        let _plan = JSON.parse(yourPlan);
        console.log(_plan);
        setPlan(_plan);
    }, [])

    return <div className='p-3'>
        <div className='row'>
            <div className='col-md-3'>
                <h4 className='text-center border p-2'>Your Plan</h4>
                <div style={{
                    overflowY: 'scroll',
                    height: '90vh'
                }}>
                    {plan.map((item, i) => {
                        return <div className='mt-2 p-2' key={item.exercise.name}>
                            <div className='d-flex justify-content-between border p-2'>
                                <span><strong>{item.exercise.name}</strong></span> <span>{item.set} sets</span>
                            </div>
                            <Table className='table-borderless m-0 mt-1 border'>
                                <tbody>
                                    {[...Array(item.set)].map((_, j) => {
                                        return <tr key={"set" + i + j} className={currentExc.exc === i && currentExc.set === j ? 'bg-warning' : ''}>
                                            <td>{item.weight} kg</td>
                                            <td>{j + 1}</td>
                                            <td>{item.rep} reps</td>
                                        </tr>
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    })}
                </div>
            </div>
            <div className='col-md-9'>
                <div>
                    <div className='d-flex justify-content-center align-item-center my-5'>
                        {!timer && <img src={plan[currentExc.exc]?.exercise.gifUrl || ''} alt="none" />}
                        {timer !== null ? <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%',
                            width: '400px',
                            height: '400px',
                            fontSize: '100px',
                            border: '10px solid #000',
                        }}>
                            <div className='d-flex flex-column justify-content-center align-item-center'>
                                {timer}
                                <button onClick={skip} className='btn btn-light'>
                                    Skip
                                </button>
                            </div>
                        </div> : ''}
                    </div>

                    {!timer && <div className='d-flex justify-content-center align-item-center'>
                        <button className='btn btn-secondary' style={{
                            width: '100px',
                        }} onClick={takeBreak}>Done</button>
                    </div>}
                </div>
            </div>
        </div>
    </div>
}