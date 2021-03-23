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

    const editNoteHandler = (editedValue, ind) => {
        setNotes(prevNotes => {
            return prevNotes.map((note, i) => {
                return i === ind ? {
                    ...note,
                    title: editedValue.title,
                    content: editedValue.content
                } : note
            });
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
                        onEdit={editNoteHandler}
                        onDelete={deleteNoteHandler}
                    />)
                })}
            </div>
        </div>
    );
}

export default App;
