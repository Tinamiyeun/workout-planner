import React, { useState, useEffect } from 'react';
import PlannedList from 'components/PlannedList';
import { useFetchDB } from 'hooks/useFetchDb';

//Displays the exercises for predefined plan.
let beginnerUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
let list = 'https://exercisedb.p.rapidapi.com/exercises'
let id1 = 'https://exercisedb.p.rapidapi.com/exercises/exercise/0001'


function PlanChoices() {
    const [allData, setAllData] = useState([]);
    const [beginnerData, setBeginnerData] = useState([]);
    const [intermediateData, setIntermediateData] = useState([]);
    const [expertData, setExpertData] = useState([]);
    const [urlList, setUrlList] = useState([]);

   // const bodyParts = useFetch(list, options);
   // const listById = useFetch(id1, options);

    let backend = process.env.REACT_APP_SERVER_URL;
    useEffect(() => {
        const add = async () => {
            const res = await fetch(backend+"/get", { method: "GET" })
            const data = await  res.json();
            console.log(data);
            let tempUrl = [];
            /*data.map((item) => {
                item.exercises.map((exercise) => {
                    for (const url of exercise.url) {
                        tempUrl.push(url);
                    }
                    setUrlList(tempUrl);
                    console.log(tempUrl);
                })
            })*/
            setAllData(data);
        }
        add();
        //console.log(allData);
    }, [])
    
    useEffect(() => {
        const setLevel = () => {
            setBeginnerData([allData[0]]);
            setIntermediateData([allData[1]]);
            setExpertData(allData[2]);
        }
        setLevel();
        console.log(allData);
        //console.log(beginnerData)
    },[allData])
    
    useEffect (() => {
        console.log(beginnerData)
        console.log(intermediateData)
        console.log(expertData)
    }, [beginnerData, intermediateData, expertData])
    

    
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
    }, [])*/
    
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
    }*//*

    return (
        <div id="plan">
            <PlannedList level="beginner" data={beginnerData}/>
            <PlannedList level="intermediate" data={intermediateData}/>
            <PlannedList level="expert" data={expertData}/>
        </div>
    );
}

export default PlanChoices;

}*/


//sessionstorage version
/*
import React, { useState, useEffect } from 'react';
import PlannedList from 'components/PlannedList';
//import { useFetch } from 'hooks/useFetch';


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
            console.log(data[0]);
            setAllData(data);
            setBeginnerData(data[0]);
            setIntermediateData(data[1]);
            setExpertData(data[2]);
            [data].map((item) => {
                item.exercises.map((exercise) => {
                    console.log(exercise.url);
                })
            })
            window.sessionStorage.setItem('beginnerArray', JSON.stringify(data[0]));
            window.sessionStorage.setItem('intermediateArray', JSON.stringify(data[1]));
            window.sessionStorage.setItem('expertArray', JSON.stringify(data[2]));
            //setAllData(data);
            //setBeginnerData(data[0]);
            //setIntermediateData(data[1]);
            //setExpertData(data[2]);
        })
    }
    
    let beginnerArray = sessionStorage.getItem('beginnerArray');
    let intermediateArray = sessionStorage.getItem('intermediateArray');
    let expertArray = sessionStorage.getItem('expertArray');
    //const mapping = () => JSON.parse(beginnerArray).)

    useEffect(() => {
        add()
       // mapping();
        console.log(allData);
    }, [])
    


    return (
        <div id="plan">
            <PlannedList level="beginner" data={allData[0]}/>
            <PlannedList level="intermediate" data={allData[0]}/>
            <PlannedList level="expert" data={allData[0]}/>
        </div>
    );
}


export default PlanChoices;
*/