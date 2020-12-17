import React, { useState } from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);

    const addNoteHandler = (newNote) => {
        setNotes((prevNote) => {
            return [...prevNote, newNote];
        });
    }

    const deleteNoteHandler = (id) => {
        setNotes((prevNote) => {
            return prevNote.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNoteHandler} />
            <div className="notes">
                {notes.map((note, ind) => {
                    return (<Note
                        key={ind}
                        id={ind}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNoteHandler}
                    />)
                })}
            </div>
        </div>
    );
}

export default App;
