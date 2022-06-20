import { Modal, Button } from 'react-bootstrap';



export function GifModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.exercise.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign: 'center'}}>
          <img src={props.exercise.gifUrl} alt="exercise gif"></img>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }