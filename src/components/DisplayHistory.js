import React, {useState, useContext, useEffect} from 'react';
import { UserNameContext } from 'contexts/UserNameContext';
import Table from 'react-bootstrap/Table';

function DisplayHistory() {

    const [userName, setUserName] = useContext(UserNameContext);
    // React.useEffect(() => {
    //     console.log({userName})       
    //     }) 
    let history = [];
    const show = () => {
        
        fetch("http://localhost:3001/history/get", {
            method: 'POST',
            body: JSON.stringify({
                username: userName
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8", 
            },
        })
        .then((data) => data.json())
        .then((json) => {history=JSON.parse(JSON.stringify(json))
            console.log(history)
        });
    };
    show();


    return (
        <>
         {/* <button onClick={show}>click</button> */}
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>workout history</th>
          <th>comment</th>
          <th>date and time</th>
        </tr>
      </thead>
      <tbody>
        {history.map((history) =>{
            //console.log(history.id);
            return <tr key={history.id}>
                <td>{history.exercise_records}</td>
                <td>{history.comment}</td>
                <td>{history.date}</td>
            </tr>
        })}      
      </tbody>
    </Table>
        </>
    )
}



export default DisplayHistory;