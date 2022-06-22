import { Modal, Button } from 'react-bootstrap';

export function GifModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.exercise.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className='container' src={props.exercise.gifUrl} alt="exercise gif"></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }