import Home from './Home.jsx';
import Diary from './Diary.jsx';
import Entries from './Entries.jsx';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState({
    headline: '',
    date: '',
    gratitude: '',
    accomplishments: '',
    tomorrow: '',
    mood: 0,
   });
  useEffect(() => {
    axios.get('/diary')
      .then(response => {
        setEntries(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Tabs className="mb-3">
        <Tab eventKey="home" title="Home">
          <Home fname="Junsu" lname="Park"/>
        </Tab>
        <Tab eventKey="diary" title="Diary">
          <Diary
            entries={entries}
            setEntries={setEntries}
          />
        </Tab>
        <Tab eventKey="entries" title="Entries">
          <Entries
            entry={entry}
            setEntry={setEntry}
            entries={entries}
            setEntries={setEntries}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
