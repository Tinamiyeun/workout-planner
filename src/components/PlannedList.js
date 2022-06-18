import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useFetchDb } from "hooks/useFetchDb";
import Button from 'react-bootstrap/Button';
import { options, useFetch } from 'hooks/useFetch';

 function PlannedList (props) {
    const [exercises, setExercises] = useState([]);
    const [urlList, setUrlList] = useState([]);
    const [exerciseName, setExerciseName] = useState([]);
    const navigate = useNavigate();

    useEffect (() => {
        console.log(exercises);
        setExercises(props.data);
    }, [])

    useEffect (() => {
        console.log(exercises);
        addUrl();
    }, [exercises])

    useEffect (() => {
        console.log(urlList);
        fetchNames();
    }, [urlList])

    useEffect (() => {

    }, [exerciseName])

    const addUrl = () => {
        let tempUrl = [];
        exercises.map((item) => {
            item.exercise.map((exercise) => {
                tempUrl.push(exercise.url)
            })
        })
        setUrlList(tempUrl);
    }

    const fetchNames = async () => {
        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
            headers: {
              'X-RapidAPI-Key': '082a5f6ba3mshd277027b79d445bp15ed55jsnb7c2a88adc19',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        }
        let tempName = [];
        for (const url of urlList) {
            const res = await fetch(url, options)
            const data = await  res.json();
            console.log(data);
            tempName.push(data);
        }
        setExerciseName(tempName);
    }

    /*const setData = () => {
        //console.log(props.data);
        setExercises(props.data);
        console.log(exercises);
        console.log("im set");
    }
    let urlList = [];
    const exercisesUrls = () => {exercises.map((item) => {
        item.exercise.map((exercise) => {
            return (urlList.push(exercise.url))
        })
    })}
    //console.log(exercisesUrls);

    //let url = props.url;
    
    let exerciseName = [];
    const fetchNames = async () => {
        for (const url of urlList) {
            const res = await fetch(url);
            exerciseName.push(await res.json());
        }
        return exerciseName;
    }*/

    const saveExercise = () => {
        window.sessionStorage.setItem('yourPlan', JSON.stringify(exerciseName));
        navigate("/");
    }



    //const bodyParts = useFetch(url, options);
    return ( //useFetch and have props for url.
        <div>
            <h2>{props.level}</h2>
            <ul>
                {exerciseName?.map((name)=>{
                return <li key={name.name}>{name.name}</li>
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

/*
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
*/

//sessionstorage way
/*
import React, { useState, useEffect } from 'react';
import { useFetchDb } from "hooks/useFetchDb";
import Button from 'react-bootstrap/Button';
import { options, useFetch } from 'hooks/useFetch';

 function PlannedList (props) {
    const [dataArray, setDataArray] = useState(props.data);
    const [urlList, setUrlList] = useState([]);
    
    let list = [];
    const exercisesUrls = () => {
        try {
            console.log("data should be there")    
            //let dataObj = JSON.parse(sessionStorage.getItem(props.data));
            console.log(dataArray);
            
        //setUrlList([...tempUrlList, tempUrlList]);
        console.log("it worked!");
        //console.log([tempUrlList]);
        } catch (e) {
            console.log("error" + e.message);
        }
        
    }
       //console.log(list);
    
    //console.log(urlList);
    const sessionarray = () => {
        const tempUrlList = [];
        const array = JSON.parse(window.sessionStorage.getItem('beginnerArray'));
        console.log(array);
        array?.map((item) => {
            item.exercises.map((exercise) => {
                tempUrlList.push(exercise.url);
            })
        })
    }

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
        props.data && setDataArray(props.data);
        dataArray && exercisesUrls();
        sessionarray();
        //fetchNames();
        //console.log(props.data);
        //console.log(exercises)
        //console.log(urlList);
        //console.log(exerciseName);
    }, [props.data])


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
*/