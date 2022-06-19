import React, {useState, useContext} from 'react';
import { UserNameContext } from 'contexts/UserNameContext';
import DisplayHistory from 'components/DisplayHistory';
import Container from 'react-bootstrap/Container';

function History() {

    const [userName, setUserName] = useContext(UserNameContext);

    // React.useEffect(() => {
    //     console.log({userName})       
    //     })    

    return (

        <Container>
            <div className="text-center">
            <h1 >{userName}'s workout history</h1>
            </div>
        
         <DisplayHistory />
        </Container>
    )
}

export default History;