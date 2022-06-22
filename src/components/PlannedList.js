import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { VipContext } from "contexts/VipContext";
import { Card } from 'react-bootstrap';

 function PlannedList (props) {
    const [urlList, setUrlList] = useState([]);
    const [exerciseName, setExerciseName] = useState([]);
    const [yourPlan, setYourPlan] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isVip, setIsVip] = useContext(VipContext);
    const navigate = useNavigate();

    const exercises = props.data;
    const setExercises = props.setData;

    let storedLevelPlan = null;
    if (props.level === 'Beginner') {
        storedLevelPlan = JSON.parse(localStorage.getItem('beginnerPlan'));
    } else if (props.level === 'Intermediate') {
        storedLevelPlan = JSON.parse(localStorage.getItem('intermediatePlan'));
    } else if (props.level === 'Expert') {
        storedLevelPlan = JSON.parse(localStorage.getItem('expertPlan'));
    }

    useEffect (() => {
        !storedLevelPlan && addUrl();
    }, [exercises]) 

    useEffect (() => {
        fetchNames();
    }, [urlList])

    const addUrl = () => {
        try{
            let tempUrl = [];
            exercises.map((item) => {
                item.exercise.map((exercise) => {
                    tempUrl.push(exercise.url)
                })
            })
            setUrlList(tempUrl);
            setLoading(true);
        } catch (e) {
            // console.log(e)
        }
    }

    const fetchNames = async () => {
        try{
            const options = {
                method: 'GET',
                url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                headers: {
                  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            }
            let tempName = [];
            let planList = [];
            if (!storedLevelPlan) {
                for (const url of urlList) {
                    const res = await fetch(url, options)
                    const data = await  res.json();
                    tempName.push(data);
                    planList.push({exercise: data, weight: 0, rep: 8, set: 4})
                }
                setExerciseName(tempName);
            } else {
                for (const data of storedLevelPlan) {
                    planList.push({...data, weight: 0, rep: 8, set: 4})
                }
                setExerciseName(storedLevelPlan);
            }
            setYourPlan(planList);
            setLoading(true);
        } catch (e) {
            console.log('This is the error:' + e);
        }
    }

    const saveExercise = () => {
        try {
            window.sessionStorage.setItem('yourPlan', JSON.stringify(yourPlan)); 
            !storedLevelPlan && window.localStorage.setItem(props.level.toLowerCase() + 'Plan', JSON.stringify(yourPlan)); 
            isVip ? navigate("/customizeplan") : navigate("/editbeginnerplan");
        } catch (e) {
            // console.log(e);
        }
    }

    return ( 
        <Card id="plan-list" style={{display:'flex', height: '100%', marginBottom: '20px', marginTop: '20px'}}>
            <Card.Title style={{textDecoration: 'underline'}}><h2>{props.level}</h2></Card.Title>
            {storedLevelPlan ? 
            <Card.Body>
                <ul>
                    {exerciseName?.map((item)=>{
                        return (
                        <li>
                            {item.exercise.name}
                        </li>
                        )
                    })}
                </ul>
            </Card.Body> 
            :
            <Card.Body>
                <ul>
                    {exerciseName?.map((exercise)=>{
                    return <li key={exercise.name}>
                        <Card.Text style={{fontSize: '20px'}}>{exercise.name}</Card.Text></li>
                    })}
                </ul>
            </Card.Body>
            }
            <Button variant="warning" onClick={saveExercise}>Select this plan</Button>
        </Card>
    );
}

export default PlannedList;