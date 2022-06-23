import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';

const emojis = [
  '😭','😥','😐','🙂','😁'
]

export default function Diary({entries, setEntries}) {
  const date = new Date();
  const [mood, setMood] = useState(2);
  const [headline, setHeadline] = useState('');
  const [accomplishments, setAccomplishments] = useState('');
  const [gratitude, setGratitude] = useState('');
  const [tomorrow, setTomorrow] = useState('');
  const [picture, setPicture] = useState('');

  function handleClick(e) {
    e.preventDefault();
    const form = {
      date: date,
      mood: mood,
      headline: headline,
      accomplishments: accomplishments,
      gratitude: gratitude,
      tomorrow: tomorrow,
      picture: picture,
    }
    axios.post('/diary', form)
      .then(response => setEntries([response.data, ...entries]))
      .catch(err => console.log(err));
  }

  return (
    <div className="container">
      <p>Today is {date.getMonth()}/{date.getDate()}/{date.getFullYear()}. Start writing below:</p>
      <Form >
          <Form.Group className="mb-3" controlId="headline">
            <Form.Label>Headline</Form.Label>
            <FloatingLabel label="Short description of today">
              <Form.Control type="text" placeholder="." onChange={(e) => setHeadline(e.target.value)}/>
            </FloatingLabel>
          </Form.Group>


        <div className="row">
          <div className="col">
            <Form.Group className="mb-3" controlId="accomplishment">
              <Form.Label>What I Accomplished Today</Form.Label>
              <FloatingLabel label="Goals, relationships, reflections...">
                <Form.Control as="textarea" style={{height: "100px"}} placeholder="." onChange={(e) => setAccomplishments(e.target.value)}/>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="gratitude">
              <Form.Label>What I'm Grateful For Today</Form.Label>
              <FloatingLabel label="I'm grateful for...">
                <Form.Control as="textarea" style={{height: "100px"}} placeholder="." onChange={(e) => setGratitude(e.target.value)}/>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tomorrow">
              <Form.Label>What I Will Do Tomorrow</Form.Label>
              <FloatingLabel label="I will do tomorrow...">
                <Form.Control as="textarea" style={{height: "100px"}} placeholder="." onChange={(e) => setTomorrow(e.target.value)}/>
              </FloatingLabel>
            </Form.Group>
          </div>

          <div className="col-3">
            <Form.Group controlId="mood" className="mb-3">
              <Form.Label>My Mood for Today: {emojis[mood]}</Form.Label>
              <Form.Range
                min="0"
                max="4"
                onChange={(e) => setMood(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="picture" className="mb-3">
              <Form.Label>A Picture To Describe Today</Form.Label>
              <Form.Control type="text" placeholder="Enter image url here" onChange={e => setPicture(e.target.value)}/>
            </Form.Group>
          </div>
        </div>
      <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleClick(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}
