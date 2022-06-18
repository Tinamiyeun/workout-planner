import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

export function Timer(props){
    //props:currentExc, setCurrentExc, plan,
    const [timer, setTimer] = useState(null);
    const [timeout, setTimeoutFunc] = useState();
    const currentExc  = {...props.currentExc};
    const setCurrentExc = props.setCurrentExc;
    const plan = props.plan;
    const navigate = useNavigate();

    const takeBreak = () => {
        if (currentExc.exc === plan.length -1 && currentExc.set === plan[currentExc.exc].set - 1){
            navigate('/')
        }else{
            setTimer(60);
        }
    }

        
    const updateCurrent = () => {
        if (currentExc.set < plan[currentExc.exc].set - 1) {
            setCurrentExc({
                exc: currentExc.exc,
                set: currentExc.set + 1
            })
        }else if (currentExc.set === plan[currentExc.exc].set - 1 && currentExc.exc < plan.length - 1) {
            setCurrentExc({
                exc: currentExc.exc + 1,
                set: 0
            })
        }
    }

    useEffect(() =>{
        let timeoutTemp = timer > 0 && setTimeout(()=>{
            setTimer((timer)=>{
                if (timer > 0){
                    return timer - 1;
                }
                return null;
            });
        }, 1000)
        setTimeoutFunc(timeoutTemp);
        if (timer === 0){
            setTimer(null);
            updateCurrent();
        }
    }, [timer])

    const skip = () => {
        setTimer(null);
        clearTimeout(timeout);
        updateCurrent();
    }

    return <div className='col-md-9'>
                <div>
                    <div className='d-flex justify-content-center align-item-center my-5'>
                        {!timer && <img src={plan[currentExc.exc]?.exercise.gifUrl || ''} alt="none" />}
                        {timer !== null ? 
                            <div className="timer" >
                                <div className='d-flex flex-column justify-content-center align-item-center'>
                                    {timer}
                                    <button onClick={skip} className='btn btn-light'>
                                        Skip
                                    </button>
                                </div>
                            </div> : ''}
                    </div>

                    {!timer && <div className='d-flex justify-content-center align-item-center'>
                        <button className='btn btn-circle btn-warning btn-xl' style={{
                            width: '100px',
                        }} onClick={takeBreak}><FaCheck /></button>
                    </div>}
                </div>
            </div>

}