import { Table,Button } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import { GifModal } from './GifModal';
import { YourPlan } from './YourPlan';

export function ExerciseByBodyPart(props){

    const [showGif, setShowGif] = useState(false);
    const [yourPlan, setYourPlan] = useState([]);
    const [activeItem, setActiveItem] = useState([props.exercises[0], 0, 8, 4]);
    const plan = sessionStorage.getItem('yourPlan');

    const handleGif = (exercise) => {
        setActiveItem(exercise);
        setShowGif(true);
    }

    const handlePlusButton = (exercise) => {
        if (!plan) {
            setYourPlan([...yourPlan, {exercise: exercise, weight: 0, rep: 8, set: 4}]);
        } else {
            let parsedPlan = JSON.parse(plan);
            setYourPlan([...parsedPlan, {exercise: exercise, weight: 0, rep: 8, set: 4}]);
            let newPlan = [...parsedPlan, {exercise: exercise, weight: 0, rep: 8, set: 4}];
            sessionStorage.setItem('yourPlan', JSON.stringify(newPlan));
            console.log(yourPlan);
        }
        // console.log(yourPlan)
    }

    useEffect(() => {
        console.log(yourPlan);
    }, [yourPlan])

    return <div className="col-12">
        <div className="row">
            <div className="col-6 centerBox">
                <Table bordered hover responsive="true">
                    <thead>
                    <tr>
                        <th>Exercise name</th>
                        <th>Equipment</th>
                        <th>Target Muscle</th>
                        <th>Add to Your Plan</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.exercises?.map((exercise) => {
                        return <tr key={exercise.id}>
                            <td onClick={() => handleGif(exercise)}>{exercise.name}</td>
                            <td>{exercise.equipment}</td>
                            <td>{exercise.target}</td>
                            {/* <img src={exercise.gifUrl} alt="exercise gif" style={{display: showGif ? "block" : "none"}}></img> */}
                            <Button className="tabBtn" variant="outline-secondary"
                                    onClick={() => handlePlusButton(exercise)}>+</Button>
                        </tr>
                    })}
                    </tbody>
                </Table>
            </div>
            <div className="col-6 rightBox">
                <GifModal show={showGif} onHide={() => setShowGif(false)} exercise={activeItem}/>
                <YourPlan yourPlan={yourPlan} setYourPlan={setYourPlan}/>
            </div>
        </div>

    </div>
}