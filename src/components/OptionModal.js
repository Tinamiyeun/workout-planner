import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function OptionModal(props) {

    // const wantAdjust = props.wantAdjust;
    // const setWantAdjust = props.setWantAdjust;
    const navigate = useNavigate();
    const yourPlan = props.yourPlan;
    const setYourPlan = props.setYourPlan;
    const [clickYes, setClickYes] = useState(false);
    let tempList = [];

    useEffect(() =>{
        
        
        
        console.log(yourPlan);

        window.sessionStorage.setItem('yourPlan', JSON.stringify(yourPlan));

    },[yourPlan])

    const handleYes = () => {
        tempList = [];

        yourPlan?.forEach((element) => {
            tempList.push({
                exercise: element.exercise,
                weight: Math.floor(element.weight * 2),
                rep: element.rep,
                set: element.set
            })
        });
        console.log(tempList)
        setYourPlan(tempList);
        console.log(yourPlan);
        props.onHide();
        // setWantAdjust(true);
        setClickYes(true);
        navigate('/reuseplan');

        
    }
    const handleNo = (callback) => {
        // setWantAdjust(false);
        props.onHide();
        let tempList = [];
        yourPlan.forEach((element)=>{
            tempList.push({
                exercise: element.exercise,
                weight: Math.floor(element.weight * 0.9),
                rep: element.rep,
                set: element.set
            })
        setYourPlan(tempList, callback);
        })
        navigate('/reuseplan');
    }

    // useEffect(() => {
    // })

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
          <Button variant="warning" onClick={()=>{handleYes(()=>{console.log(yourPlan)})}}>Yes</Button>
          <Button variant="warning" onClick={handleNo}>No</Button>
        </Modal.Footer>
      </Modal>
    );
  }