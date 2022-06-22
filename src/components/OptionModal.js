import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function OptionModal(props) {

    const navigate = useNavigate();
    const yourPlan = props.yourPlan;
    const setYourPlan = props.setYourPlan;
    const [goNext, setGoNext] = useState(false);

    useEffect(() =>{
      window.sessionStorage.setItem('yourPlan', JSON.stringify(yourPlan));
      if (goNext) navigate('/reuseplan');     
    },[goNext])

    const handleYesUp = () => {
      setGoNext(true);
        props.onHide();
        let tempList = [];
        yourPlan?.forEach((element) => {
            tempList.push({
                exercise: element.exercise,
                weight: Math.floor(element.weight * 1.2),
                rep: element.rep,
                set: element.set
            })
        });
        setYourPlan(tempList);

    }

    const handleYesDown = () => {
        setGoNext(true);
        props.onHide();
        let tempList = [];
        yourPlan?.forEach((element) => {
            tempList.push({
                exercise: element.exercise,
                weight: Math.floor(element.weight * 0.8),
                rep: element.rep,
                set: element.set
            })
        });
        setYourPlan(tempList);

    }

    const handleNo = () => {
      setGoNext(true);
      props.onHide();
    }

    return (
    <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Would you like to adjust the weight?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.comment === "too easy" || props.comment === "great"? 
          <>Last time the plan is <strong>{props.comment}</strong>  for you! <br></br>
          Do you want to push yourself a little this time by increasing the weight?</>
          :
          <>Last time the plan is <strong>{props.comment}</strong> for you! <br></br>
          Do you want to reduce the weight?</>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={props.comment === "too easy" || props.comment === "great"?handleYesUp:handleYesDown}>Yes</Button>
          <Button variant="warning" onClick={handleNo}>No</Button>
        </Modal.Footer>
      </Modal>
    );
  }
