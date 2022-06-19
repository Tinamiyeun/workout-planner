import React, { useState, useEffect } from 'react';
import PlannedList from 'components/PlannedList';
import { useFetchDB } from 'hooks/useFetchDb';
import Spinner from 'react-bootstrap/Spinner';

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
    const [loading, setLoading] = useState(false);


    let backend = process.env.REACT_APP_SERVER_URL;
    const add = async () => {
        try{
            const res = await fetch(backend+"/get", { method: "GET" })
            const data = await  res.json();
            console.log(data);
            let tempUrl = [];

            setLoading(true);
            setAllData(data);
            
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        add();
    }, [])
    
    useEffect(() => {
        const setLevel = () => {
            setBeginnerData([allData[0]]);
            setIntermediateData([allData[1]]);
            setExpertData([allData[2]]);
        }
        setLevel();
        //console.log(allData);
    },[allData])
    
    useEffect (() => {
       // console.log(beginnerData)
        //console.log(intermediateData)
        //console.log(expertData)
        setLoading(false)
    }, [beginnerData, intermediateData, expertData])
    

    return (
            <div id="plan">
                {loading ? 
                <>
                    <Spinner animation="border"/>
                    <p>loading</p>
                </> 
                : 
                <>
                    <PlannedList level="beginner" data={beginnerData} setData={setBeginnerData}/>
                    <PlannedList level="intermediate" data={intermediateData} setData={setIntermediateData}/>
                    <PlannedList level="expert" data={expertData} setData={setExpertData}/>
                </>
                }

                
            </div>

    );
}

export default PlanChoices;