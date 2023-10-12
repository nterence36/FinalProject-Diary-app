import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001"

function App() {
  const [entry, setEntry] = useState([])
  const [addEntry, setAddEntry] = useState(false)
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")

  useEffect(() => {
    getEntry();
    
  }, [])

  const getEntry = () => {
    fetch(API_URL + "/diary")
    .then(res => res.json())
    .then(data => setEntry(data))
    .catch(err => console.log("Error:", err))
  }

  const deleteEntry = async (id) => {
    const notes = await fetch(API_URL + "/diary/" + id, {
      method:"DELETE"
    })
    .then(res => res.json())
    setEntry(entry => entry.filter(entry => entry._id !== notes._id))
  }

  const addNewEntry = async () =>{
    const entries = await fetch(API_URL + "/diary/new", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        note: note
      })
     
    }).then(res => res.json())
    setEntry([...entry, entries])
    setAddEntry(false)
    setNewEntry("")
  }

  return (
    <div className="App">
      <h1>Welcome to Diary Make Eassy</h1>
      <h2>All Your Entries</h2>
       <div className="Entry">
        {entry.map(entry =>(
          <div className="Entries" key={entry._id}>
            <div className="Entry-title"><h2>{entry.title}</h2></div>
            <div className="Delete">{entry.date}</div>
            <div className="Entry-notes">{entry.note}</div>
            <div className="Delete" >
              <input onClick={() => deleteEntry(entry._id)} type="submit" value="Delete"/>
              {" "}
              <input type="submit" value="Edit Content"/>
            </div>
            
          </div>
        ))}
       
       </div>
          <div>
            
          </div>
      <div className="addEntry" >
          <input onClick={() => setAddEntry(true)} type="submit" value="Add Entry"/>
              { addEntry ? (
                    <div className="Entry"> 
                      <div className="clearUp" onClick={() => setAddEntry(false)}>X</div>
                        <div className="notes">
                          <h3>Add to Diary</h3>
                          <h2>Topic:<input type="text" name="title" onChange={el => setNewEntry(el.target.value)} value={title}/></h2>
                          <h2>Notes: <input type="text" name="note" className="noteInput"
                          onChange={el => setNote(el.target.value)} value={note}/></h2>
                          {" "}
                          <button type="submit" onClick={addNewEntry}>Create Entry</button>
                        </div>
                      </div>
                  
              ) : ""}
        </div>

    </div>
  );
}

export default App;
