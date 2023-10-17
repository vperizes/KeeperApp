import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";

function addNote(note) {
    return (
        <Note
            key={note.id}
            noteTitle={note.title}
            noteContent={note.content}
        />
    );
}

function App() {
    return (
        <div>
            <Header />
            {notes.map(addNote)}
            <Footer />
        </div>
    );
}

export default App;