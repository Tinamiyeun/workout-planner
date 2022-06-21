import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
;
export function YourPlan(props){
    const plan = sessionStorage.getItem('yourPlan');
    //const yourPlan = plan? JSON.parse(plan) : props.yourPlan;
    //const [yourPlan, setYourPlan] = useState([props.yourPlan]);
    const yourPlan =  props.yourPlan;
    const setYourPlan = props.setYourPlan; 
    let count = 1;

    const handleDelete = (index) => {
        count--;
        const newList = yourPlan;
        newList.splice(index, 1);
        setYourPlan([...newList]);
    }

    const navigate = useNavigate();
    const handleStartButton = () => {
        navigate("/workout");
    }

    useEffect(()=>{
        window.sessionStorage.setItem('yourPlan', JSON.stringify(yourPlan));
    },[yourPlan]);               

    // useEffect(()=>{
    //     //plan && yourPlan = [...yourPlan, plan];
    //     console.log(yourPlan)
    // },[yourPlan])

    const minusWeight = (item, index)=>{

        let newList = [];
        for (let i = 0; i < yourPlan.length; i++){
            if(i === index) {
                newList.push({
                    exercise: item.exercise,
                    weight: item.weight - 1,
                    rep: item.rep,
                    set: item.set
                })
            }else{ newList.push(yourPlan[i]);}
        }
        setYourPlan(newList);
    }

    const plusWeight = (item, index)=>{
        let newList = [];
        for (let i = 0; i < yourPlan.length; i++){
            if(i === index) {
                newList.push({
                    exercise: item.exercise,
                    weight: item.weight + 1,
                    rep: item.rep,
                    set: item.set
                })
            }else{ newList.push(yourPlan[i]);}
        }
        setYourPlan(newList);
    }

    const minusRep = (item, index)=>{
        let newList = [];
        for (let i = 0; i < yourPlan.length; i++){
            if(i === index) {
                newList.push({
                    exercise: item.exercise,
                    weight: item.weight,
                    rep: item.rep - 1,
                    set: item.set
                })
            }else{ newList.push(yourPlan[i]);}
        }
        setYourPlan(newList);
    }

    const plusRep = (item, index)=>{
        let newList = [];
        for (let i = 0; i < yourPlan.length; i++){
            if(i === index) {
                newList.push({
                    exercise: item.exercise,
                    weight: item.weight,
                    rep: item.rep + 1,
                    set: item.set
                })
            }else{ newList.push(yourPlan[i]);}
        }
        setYourPlan(newList);
    }
    
    const minusSet = (item, index)=>{
        let newList = [];
        for (let i = 0; i < yourPlan.length; i++){
            if(i === index) {
                newList.push({
                    exercise: item.exercise,
                    weight: item.weight,
                    rep: item.rep,
                    set: item.set - 1
                })
            }else{ newList.push(yourPlan[i]);}
        }
        setYourPlan(newList);
    }

    const plusSet = (item, index)=>{
        let newList = [];
        for (let i = 0; i < yourPlan.length; i++){
            if(i === index) {
                newList.push({
                    exercise: item.exercise,
                    weight: item.weight,
                    rep: item.rep,
                    set: item.set + 1
                })
            }else{ newList.push(yourPlan[i]);}
        }
        setYourPlan(newList);
    }


    return (
        <div className="col-12">
            <h4>Your Plan</h4>
            <Table bordered responsive="true" className="text-secondary">
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
                {yourPlan && yourPlan.map((item, index) => {
                    return (
                        <tr>
                            <td>{count++}</td>
                            <td>{item.exercise.name}</td>
                            <td><div className="tabBtns">
                                 <button onClick={()=>minusWeight(item,index)}>-</button>
                                 {item.weight}kg
                                 <button onClick={()=>plusWeight(item,index)}>+</button>
                                </div></td>
                            <td><div className="tabBtns">
                                <button onClick={()=>minusRep(item, index)}>-</button>
                                {item.rep}
                                <button onClick={()=>plusRep(item, index)}>+</button>
                            </div></td>
                            <td><div className="tabBtns">
                                 <button onClick={()=>minusSet(item, index)}>-</button>
                                 {item.set}
                                 <button onClick={()=>plusSet(item, index)}>+</button>
                                </div></td>
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