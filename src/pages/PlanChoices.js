import React, { useState, useEffect, useContext } from 'react';
import PlannedList from 'components/PlannedList';
import {LoggedInContext} from "../App";
import Spinner from 'react-bootstrap/Spinner';
import SuggestVip from '../components/SuggestVip';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NotLoggedIn from 'helpers/NotLoggedIn';


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
            // console.log(e);
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
    },[allData])
    
    useEffect (() => {
        setLoading(false)
    }, [beginnerData, intermediateData, expertData])
    

    return (
        <>
            {isLoggedIn ?
            <>
            {loading ? 
                <>
                    <Spinner animation="border"/>
                    <p>loading</p>
                </> 
                : 
                <>  
                    <Container>
                        <Row>
                            <Col>
                                <PlannedList level="Beginner" data={beginnerData} setData={setBeginnerData}/>
                            </Col>
                            <Col>
                                <PlannedList level="Intermediate" data={intermediateData} setData={setIntermediateData}/>
                            </Col>
                            <Col>
                                <PlannedList level="Expert" data={expertData} setData={setExpertData}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <SuggestVip />                         
                            </Col>
                        </Row>
                    </Container>
                </>
            }
            </>
            : 
            <NotLoggedIn />
            }
                
        </>

    );
}

export default PlanChoices;