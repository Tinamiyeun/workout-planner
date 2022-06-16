import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { options, useFetch } from 'hooks/useFetch';

function PlannedList (props) {
    let url = props.url;
    const bodyParts = useFetch(url, options); //to be changed to the predefined list
    
    return ( //useFetch and have props for url.
        <div>
            <h2>{props.level}</h2>
            <ul>
                {bodyParts?.map((bodyPart)=>{
                return <li key={bodyPart}>{bodyPart}</li>
                })}
            </ul>            
        </div>
    );
}

export default PlannedList;