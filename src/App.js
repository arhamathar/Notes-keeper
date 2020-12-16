import React, { useState } from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);

    const addNoteHandler = (newNote) => {
        setNotes((prevNote) => {
            return [...prevNote, newNote];
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNoteHandler} />
            <div className="notes">
                {notes.map(note => {
                    return (<Note key="" title={note.title} content={note.content} />)
                })}
            </div>
            <Footer />
        </div>
    );
}

export default App;
