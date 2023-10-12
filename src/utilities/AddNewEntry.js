const API_URL = "http://localhost:3001"
const addNewEntry = async () =>{
    const entries = await fetch(API_URL + "/diary/new", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        title: newEntry,
        note: note
      })
     
    }).then(res => res.json())
    setEntry([...entry, entries])
    setAddEntry(false)
    setNewEntry("")
  }

  export default addNewEntry;