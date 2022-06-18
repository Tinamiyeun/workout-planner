import React, { useState, useEffect } from 'react';
import PlannedList from 'components/PlannedList';
import { options, useFetch } from 'hooks/useFetch';

//Displays the exercises for predefined plan.
let beginnerUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
let list = 'https://exercisedb.p.rapidapi.com/exercises'
let id1 = 'https://exercisedb.p.rapidapi.com/exercises/exercise/0001'


function PlanChoices() {
    const [allData, setAllData] = useState([]);
    const [beginnerData, setBeginnerData] = useState([]);
    const [intermediateData, setIntermediateData] = useState([]);
    const [expertData, setExpertData] = useState([]);

    //const bodyParts = useFetch(list, options);
    //const listById = useFetch(id1, options);

    let backend = process.env.REACT_APP_SERVER_URL;
    let [result, setResult] = useState([]);
    const add = async () => {
        await fetch(backend+"/get", { method: "GET" })
        .then((response) => response.json())
        .then((data => {
            setResult(data);
            //console.log(result);
            
        }))
        
        setAllData(result);
        setBeginnerData(result[0]);
        setIntermediateData(result[1]);
        setExpertData(result[2]);
        //console.log("I finished fetching!");
    }
    
    useEffect(() => {
        add()
        //console.log(intermediateData);
        
    }, [result])
    
/*    const beginnerUpdate = () => {
        
        return beginnerData;
    }
    const intermediateUpdate = () => {
        setIntermediateData(allData[1])
        return intermediateData;
    }
    const expertUpdate = () => {
        setExpertData(allData[2])
        return expertData;
    }*/

    return (
        <div id="plan">
            <PlannedList level="beginner" data={beginnerData}/>
            <PlannedList level="intermediate" data={intermediateData}/>
            <PlannedList level="expert" data={expertData}/>
        </div>
    );
}


export default PlanChoices;

/*}

*/

/*
import React, { useState, useEffect } from 'react';
import PlannedList from 'components/PlannedList';
import { options, useFetch } from 'hooks/useFetch';

//Displays the exercises for predefined plan.
let beginnerUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
let list = 'https://exercisedb.p.rapidapi.com/exercises'
let id1 = 'https://exercisedb.p.rapidapi.com/exercises/exercise/0001'


function PlanChoices() {
    const [allData, setAllData] = useState([]);
    const [beginnerData, setBeginnerData] = useState([]);
    const [intermediateData, setIntermediateData] = useState([]);
    const [expertData, setExpertData] = useState([]);

    //const bodyParts = useFetch(list, options);
    //const listById = useFetch(id1, options);

    let backend = process.env.REACT_APP_SERVER_URL;
    const add = () => {
        fetch(backend+"/get", { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setAllData(data);
            setBeginnerData(data[0]);
            setIntermediateData(data[1]);
            setExpertData(data[2]);
        })
        .then(() => {
            console.log(beginnerData);
        })
    }
    
    useEffect(() => {
        add()
        
        console.log(intermediateData);
    }, [])
    
/*    const beginnerUpdate = () => {
        
        return beginnerData;
    }
    const intermediateUpdate = () => {
        setIntermediateData(allData[1])
        return intermediateData;
    }
    const expertUpdate = () => {
        setExpertData(allData[2])
        return expertData;
    }*/
/*
    return (
        <div id="plan">
            <PlannedList level="beginner" data={beginnerData}/>
            <PlannedList level="intermediate" data={intermediateData}/>
            <PlannedList level="expert" data={expertData}/>
        </div>
    );
}

export default PlanChoices;

/*}

*/
