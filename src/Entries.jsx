import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import RelativeTime from '@yaireo/relative-time';
import axios from 'axios';
import { useState } from 'react';
import DeleteModal from './DeleteModal.jsx';
import UpdateModal from './UpdateModal.jsx';

const relativeTime = new RelativeTime();

export default function Entries({entry, setEntry, entries, setEntries}) {
  const [deleteShow, setDeleteShow] = useState(false);
  const [updateShow, setUpdateShow] = useState(false);
  const [target, setTarget] = useState("");

  function handleDelete() {
    axios.request({
      url: '/diary',
      method: 'delete',
      data: {
        _id: target
      }
    })
      .then(response => {
        setDeleteShow(false);
        setEntries(entries.filter(entry => entry._id !== target));
      })
      .catch(err => console.log(err));
  }

  function handleUpdate(data) {
    axios.request({
      url: '/diary',
      method: 'patch',
      data: data,
    })
      .then(response => {
        setEntry(response.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="container">
      <Row xs={1} md={2} lg={3}>
        {entries.map((entry) => (
          <Card key={entry._id}>
            <Card.Img variant="top" src={entry.picture} style={{ objectFit: "cover", width: "100%"}}/>
            <Card.Body>
              <Card.Title>{entry.date.slice(0,10)}</Card.Title>
              <Card.Text>{entry.headline}</Card.Text>
              <Button variant="primary"
                onClick={() => {
                  setEntry(entry);
                  setUpdateShow(true);
                }}
              >View</Button>
              <Button variant="danger"
                onClick={() => {
                  setTarget(entry._id);
                  setDeleteShow(true);
                }}
              >Delete</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{relativeTime.from(new Date(entry.date.slice(0, 10)))}</small>
            </Card.Footer>
          </Card>
        ))}
      </Row>
      <DeleteModal
        show={deleteShow}
        setShow={setDeleteShow}
        handleDelete={handleDelete}
      />
      <UpdateModal
        entry={entry}
        show={updateShow}
        setShow={setUpdateShow}
        handleUpdate={handleUpdate}
      />
    </div>
  )
}