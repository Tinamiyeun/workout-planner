import React, { useState, useEffect, useContext } from 'react';
import PlannedList from 'components/PlannedList';
import {LoggedInContext} from "../App";
import { useFetchDB } from 'hooks/useFetchDb';
import Spinner from 'react-bootstrap/Spinner';
import NavigateToHome from './NavigateToHome';
import SuggestVip from './SuggestVip';

function PlanChoices() {
    const [allData, setAllData] = useState([]);
    const [beginnerData, setBeginnerData] = useState([]);
    const [intermediateData, setIntermediateData] = useState([]);
    const [expertData, setExpertData] = useState([]);
    const [urlList, setUrlList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isLoggedIn,setIsLoggedIn] = useContext(LoggedInContext);


    let backend = process.env.REACT_APP_SERVER_URL;
    const add = async () => {
        try{
            const res = await fetch(backend+"/get", { method: "GET" })
            const data = await  res.json();
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
        setLoading(false)
    }, [beginnerData, intermediateData, expertData])
    

    return (
            <>
                <div class="container" id="plan">
                    {loading ? 
                        <>
                            <Spinner animation="border"/>
                            <p>loading</p>
                        </> 
                        : 
                        <>  
                            <div class="row">
                                <div class="col-4">
                                    <PlannedList level="Beginner" data={beginnerData} setData={setBeginnerData}/>
                                </div>
                                <div class="col-4">
                                    <PlannedList level="Intermediate" data={intermediateData} setData={setIntermediateData}/>
                                </div>
                                <div class="col-4">
                                    <PlannedList level="Expert" data={expertData} setData={setExpertData}/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <SuggestVip />
                                </div>
                            </div>                            
                        </>
                    }
                </div>
            </>

    );
}

export default PlanChoices;