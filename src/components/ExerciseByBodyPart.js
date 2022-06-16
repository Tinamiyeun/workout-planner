import { ListGroup, Button } from 'react-bootstrap';
import React, {useState} from 'react';
import { GifModal } from './GifModal';
import { YourPlan } from './YourPlan';

export function ExerciseByBodyPart(props){

    const [showGif, setShowGif] = useState(false);
    const [yourPlan, setYourPlan] = useState([]);
    const [activeItem, setActiveItem] = useState();

    const handleGif = (exercise) => {
        console.log(exercise);
        // setActiveItem(exercise);
        setShowGif(true);
    }

    const handlePlusButton = (exercise) => {
        setYourPlan([...yourPlan, {exercise: exercise, weight: 0, rep: 8, set: 4}]);
        // console.log(yourPlan)
    }

    return <div className="col-5">
    {props.exercises?.map((exercise)=>{
        return <div key={exercise.id}>
            <ListGroup horizontal onClick={()=>handleGif(exercise)}>
                <ListGroup.Item>{exercise.name}</ListGroup.Item>
                <ListGroup.Item>{exercise.equipment}</ListGroup.Item>
                <ListGroup.Item>{exercise.target}</ListGroup.Item>
            </ListGroup>
            {/* <img src={exercise.gifUrl} alt="exercise gif" style={{display: showGif ? "block" : "none"}}></img> */}
            <GifModal show={showGif} onHide={() => setShowGif(false)} exercise={exercise}/>
            <Button variant="outline-primary" onClick={()=>handlePlusButton(exercise)}>+</Button>
        </div>
    })}
    <YourPlan yourPlan={yourPlan} setYourPlan={setYourPlan}/>
    </div>
}