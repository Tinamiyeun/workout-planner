import React, { useState, useEffect } from 'react';
import { useFetchDb } from "hooks/useFetchDb";
import Button from 'react-bootstrap/Button';
import { options, useFetch } from 'hooks/useFetch';

 function PlannedList (props) {
    
    const [urlList, setUrlList] = useState();

    
    //console.log(exercisesUrls);

    //let url = props.url;
    
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': '082a5f6ba3mshd277027b79d445bp15ed55jsnb7c2a88adc19',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
    const [exerciseName, setExerciseName] = useState();
    
    const fetchNames = async () => {
        const tempExerciseName = [];
        for (const url of urlList) {
            const result = await fetch(url, options);
            const data = result.json();
            tempExerciseName.push(data);
            console.log(data);         
            
        }
        setExerciseName(tempExerciseName);
    }
    //send over your plan 
    const saveExercise = () => {
        sessionStorage.setItem('yourPlan', exerciseName);
    }

    useEffect (() => {
        //exercisesUrls();
        urlList && fetchNames();
        //console.log(props.data);
        //console.log(exercises)
        console.log(urlList);
        //console.log(exerciseName);
    }, [urlList])

    useEffect (() => {
        if (props.data && props.data.length > 0) {
            let tempUrlList = [];
            props.data.map((item) => { 
                
                const innerList =  item.exercise.map((exercise) => {
                return (exercise.url)
                
                })
                return innerList;
            })
            setUrlList(tempUrlList);  
        }
    },[props.data])


    //const bodyParts = useFetch(url, options);
    return ( //useFetch and have props for url.
        <div>
            <h2>{props.level}</h2>
            <ul>
                {exerciseName?.map((name)=>{
                return <li key={name}>{name}</li>
                })}
            </ul>
            <button onClick={saveExercise} >Select this plan</button>
        </div>
    );
}

export default PlannedList;
/*onClick={setExercises(props.data)} 
<ul>
                {exercisesUrls?.map((url)=>{
                return <li key={url}>{url}</li>
                })}
            </ul>
*/

/*import React, { useState, useEffect } from 'react';
import { useFetchDb } from "hooks/useFetchDb";
import Button from 'react-bootstrap/Button';
import { options, useFetch } from 'hooks/useFetch';

 function PlannedList (props) {
    
    const [exercises, setExercises] = useState(props.data);

    let urlList = [];
    const exercisesUrls = () => {exercises.map((item) => {
        item.exercise.map((exercise) => {
            return (urlList.push(exercise.url))
        })
    })}
    //console.log(exercisesUrls);

    //let url = props.url;
    
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': '082a5f6ba3mshd277027b79d445bp15ed55jsnb7c2a88adc19',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
    const [exerciseName, setExerciseName] = useState();
    
    const fetchNames = async () => {
        for (const url of urlList) {
            const result = await fetch(url, options);
            .then((res) => res.json())
            .then((data) => {
                exerciseName.push(data)
                console.log(data)
            })
            
            
        }
        return exerciseName;
    }
    //send over your plan 
    const saveExercise = () => {
        sessionStorage.setItem('exerciseList', exerciseName);
    }

    useEffect (() => {
        exercisesUrls();
        fetchNames();
        console.log(props.data);
        //console.log(exercises)
        console.log(urlList);
        console.log(exerciseName);
    }, [])


    //const bodyParts = useFetch(url, options);
    return ( //useFetch and have props for url.
        <div>
            <h2>{props.level}</h2>
            <ul>
                {exerciseName?.map((name)=>{
                return <li key={name}>{name}</li>
                })}
            </ul>
            <button onClick={saveExercise} >Select this plan</button>
        </div>
    );
}

export default PlannedList;
/*onClick={setExercises(props.data)} 
<ul>
                {exercisesUrls?.map((url)=>{
                return <li key={url}>{url}</li>
                })}
            </ul>
*/

