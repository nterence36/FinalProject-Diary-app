import React, { useState } from 'react'
import addNewEntry from '../utilities/AddNewEntry'

export default function AddEntryForm() {
    const [addEntry, setAddEntry] = useState(false)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAddEntry(values => ({...values, [name]:value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addNewEntry()
    }
  return (
    <div className="addEntry" >
        <form>
            <label>Topic</label>
            <input type='text' name='title' value={addEntry.title} onChange={handleChange}/>

            <label>Notes</label>
            <textarea name='note' value={addEntry.note} onChange={handleChange}></textarea>
            <button type='submit' onClick={handleSubmit}>Add to Diary</button>
        </form>
    </div>
  )
}









// import React from 'react'

// export default function AddEntryForm() {

//   return (
//     <div className="addEntry" >
//     <input onClick={() => setAddEntry(true)} type="submit" value="Add Entry"/>
//         { addEntry ? (
//               <div className="Entry"> 
//                 <div className="clearUp" onClick={() => setAddEntry(false)}>X</div>
//                   <div className="notes">
//                     <h3>Add to Diary</h3>
//                     <h2>Topic:<input type="text" name="title" onChange={el => setNewEntry(el.target.value)} value={newEntry}/></h2>
//                     <h2>Notes: <input type="text" name="note" className="noteInput"
//                     onChange={el => setNote(el.target.value)} value={note}/></h2>
//                     <button type="submit" className="button" onClick={addNewEntry}>Create Entry</button>
//                   </div>
//                 </div>
            
//         ) : ""}
//   </div>
//   )
// }
