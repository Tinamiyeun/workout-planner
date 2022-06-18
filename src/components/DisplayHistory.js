import React, {useState, useContext} from 'react';
import { UserNameContext } from 'contexts/UserNameContext';

function DisplayHistory() {

    // const [userName, setUserName] = useContext(UserNameContext);
    // // React.useEffect(() => {
    // //     console.log({userName})       
    // //     })    
    // const show = () => {
    //     fetch("http://localhost:3001/historylist/get", {
    //         method: 'GET',
    //         // body: JSON.stringify({userName: userName
    //         // }),
    //         // headers: {
    //         //     "Content-type": "application/json; charset=UTF-8", 
    //         // },
    //     })
    //     .then((data) => data.json())
    //     .then((json) => alert(JSON.stringify(json)));
    // };


    // return (

    //     <>
    //      <button onClick={show}>click</button>
    //     </>
    // )
}

export default DisplayHistory;