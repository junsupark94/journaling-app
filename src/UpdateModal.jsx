import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';

const emojis = [
  '😭','😥','😐','🙂','😁'
]


export default function UpdateModal({entry, show, setShow, handleUpdate}) {
  const [edit, setEdit] = useState(false);
  const [mood, setMood] = useState(entry.mood);

  function updateEntry() {
    const headline = document.getElementById('headline').value;
    const accomplishments = document.getElementById('accomplishments').value;
    const gratitude = document.getElementById('gratitude').value;
    const tomorrow = document.getElementById('tomorrow').value;
    const picture = document.getElementById('photo').value;
    const data = {
      _id: entry._id,
      headline: headline,
      accomplishments: accomplishments,
      gratitude: gratitude,
      tomorrow: tomorrow,
      mood: mood,
      picture: picture,
    };
    handleUpdate(data);
    setEdit(false);
  }

  const viewModal = (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{entry.headline}  |  {entry.date.slice(0, 10)}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="row" >
        <div className="col">
          <h5>What I Accomplished Today:</h5>
          <p>{entry.accomplishments}</p>
          <h5>What I'm Grateful For Today:</h5>
          <p>{entry.gratitude}</p>
          <h5>What I Will Do Tomorrow:</h5>
          <p>{entry.tomorrow}</p>
        </div>
        <div className="col-3">
          <h5>My Mood Today:</h5>
          <p>{emojis[entry.mood]}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setEdit(true)}>Edit</Button>
        <Button variant="primary" onClick={() => setShow(false)}>Exit</Button>
      </Modal.Footer>
    </>
  )

  const editModal = (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <Form >

            <Form.Group className="mb-3">
              <Form.Label>Headline</Form.Label>
              <FloatingLabel label="Short description of today">
                <Form.Control id="headline" type="text" placeholder="." defaultValue={entry.headline}/>
              </FloatingLabel>
            </Form.Group>


            <div className="row">
              <div className="col">
                <Form.Group className="mb-3">
                  <Form.Label>What I Accomplished Today</Form.Label>
                  <FloatingLabel label="Goals, relationships, reflections...">
                    <Form.Control
                      id="accomplishments"
                      as="textarea"
                      style={{height: "100px"}}
                      placeholder="."
                      defaultValue={entry.accomplishments}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>What I'm Grateful For Today</Form.Label>
                  <FloatingLabel label="I'm grateful for...">
                    <Form.Control
                      id="gratitude"
                      as="textarea"
                      style={{height: "100px"}}
                      placeholder="."
                      defaultValue={entry.gratitude}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>What I Will Do Tomorrow</Form.Label>
                  <FloatingLabel label="I will do tomorrow...">
                    <Form.Control
                      id="tomorrow"
                      as="textarea"
                      style={{height: "100px"}}
                      placeholder="."
                      defaultValue={entry.tomorrow}
                    />
                  </FloatingLabel>
                </Form.Group>
              </div>

              <div className="col-3">
                <Form.Group className="mb-3">
                  <Form.Label>My Mood for Today: {emojis[mood]}</Form.Label>
                  <Form.Range
                    min="0"
                    max="4"
                    id="mood"
                    defaultValue={entry.mood}
                    onChange={(e) => setMood(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>A Picture To Describe Today</Form.Label>
                  <Form.Control id="photo" type="text" placeholder="." defaultValue={entry.picture}/>
                </Form.Group>
              </div>
            </div>
          </Form>
        </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={updateEntry}>Submit</Button>
        <Button variant="primary" onClick={() => setEdit(false)}>Exit</Button>
      </Modal.Footer>
    </>
  )

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      centered
      size="xl"
    >
      {edit ? editModal : viewModal}
    </Modal>
  )
}