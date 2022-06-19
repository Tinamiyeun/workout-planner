import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

import { useFetchDb } from "hooks/useFetchDb";
import Button from 'react-bootstrap/Button';
import { options, useFetch } from 'hooks/useFetch';
import { PlanList } from './PlanList';

 function PlannedList (props) {
    const [urlList, setUrlList] = useState([]);
    const [exerciseName, setExerciseName] = useState([]);
    const [yourPlan, setYourPlan] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const exercises = props.data;
    const setExercises = props.setData;

    /*useEffect (() => {
        console.log(exercises);
        setExercises(props.data);
    }, [])*/

    useEffect (() => {
        //console.log(exercises);
        addUrl();
        //console.log(window.sessionStorage.getItem('yourPlan'));
    }, [exercises]) 

    useEffect (() => {
        //console.log(urlList);
        fetchNames();
        //console.log(window.sessionStorage.getItem('yourPlan'));
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
            console.log(e)
        }
    }

    const fetchNames = async () => {
        try{
            const options = {
                method: 'GET',
                url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                headers: {
                  'X-RapidAPI-Key': '830b4b8052mshc4fa4449a8a9a2ep1a1956jsn99856bf7a0d8',
                  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            }
            let tempName = [];
            let planList = [];
            for (const url of urlList) {
                const res = await fetch(url, options)
                const data = await  res.json();
               // console.log(data);
                tempName.push(data);
                planList.push({exercise: data, weight: 0, rep: 8, set: 4})
                
            }
            setExerciseName(tempName);
            setYourPlan(planList);
            setLoading(true);
        } catch (e) {
            console.log('This is the error:' + e);
        }
    }

    const saveExercise = () => {
        try {
            //window.sessionStorage.setItem('yourPlan', "hello"); 
            window.sessionStorage.setItem('yourPlan', JSON.stringify(yourPlan)); 
            //window.localStorage.setItem('yourPlan', JSON.stringify(yourPlan)); 
            //console.log(window.localStorage.getItem('yourPlan'));
            navigate("/editbeginnerplan");
        } catch (e) {
            console.log(e);
        }
        
    }

    const sendYourPlan = () => {
        navigate("/editbeginnerplan");
    }

    return ( 
        <div id="plan-list">
            <h2>{props.level}</h2>
            <ul>
                {exerciseName?.map((name)=>{
                return <li key={name.name}>{name.name}</li>
                })}
            </ul>
            <Button variant="primary" onClick={saveExercise} >Select this plan</Button>
            
        </div>
    );
}

export default PlannedList;