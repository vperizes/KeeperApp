import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";


function App() {
    //array where we keep all notes
    const[allNotes, setNotes] = useState([]);

    //we pass over "note" from create area component using props
    function addNote(note){
        setNotes((prevNotes) => {
            return[...prevNotes, note];
        });

        console.log(allNotes);
    }

    return (
        <div>
            <Header />
            <CreateArea create={addNote}/>
            {allNotes.map((note, index) => {
                return(
                    <Note key={index} id={index} noteTitle={note.title} noteContent={note.noteBody}/>  
                )
            })}
            <Footer />
        </div>
    );
}

export default App;