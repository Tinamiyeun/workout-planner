import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function OptionModal(props) {

    const navigate = useNavigate();
    const yourPlan = props.yourPlan;
    const setYourPlan = props.setYourPlan;
    const [goNext, setGoNext] = useState(false);
    // useEffect(() =>{
    //   window.sessionStorage.setItem('yourPlan', JSON.stringify(yourPlan));
    //   console.log(yourPlan);
    // },[yourPlan])

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

        // console.log(tempList)
        // console.log(yourPlan);
        // alert("navigating")
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

        // console.log(tempList)
        // console.log(yourPlan);
        // alert("navigating")
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
            Would you like to adjust the weight for this plan?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.easy? 
          <>Last time you think the plan is too easy, do you want to push yourself a little this time by increasing the weight?</>
          :<>Last time you think the plan is too hard, do you want to reduce the weight this time?</>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={props.easy?handleYesUp:handleYesDown}>Yes</Button>
          <Button variant="warning" onClick={handleNo}>No</Button>
        </Modal.Footer>
      </Modal>
    );
  }
