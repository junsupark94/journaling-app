import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function DeleteModal({show, setShow, handleDelete}) {
  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Warning! You are about to delete a diary entry!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete?</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleDelete}>Confirm Delete</Button>
        <Button variant="primary" onClick={() => setShow(false)}>Exit</Button>
      </Modal.Footer>
    </Modal>
  )
}