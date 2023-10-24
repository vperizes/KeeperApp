import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";


function App() {
    return (
        <div>
            <Header />
            <CreateArea />
            <Note />
            <Footer />
        </div>
    );
}

export default App;