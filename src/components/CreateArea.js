import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const onChangeHandler = (e) => {
        setNote(prevNote => {
            return {
                ...prevNote,
                [e.target.name]: e.target.value
            }
        });
    }

    const onClickHandler = (e) => {
        e.preventDefault();
        if (note.title === "" || note.content === "") {
            return;
        }
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    placeholder="Title"
                    onChange={onChangeHandler}
                    value={note.title}
                />
                <textarea
                    name="content"
                    placeholder="Take a note..." rows="2"
                    onChange={onChangeHandler}
                    value={note.content}
                />
                <button onClick={onClickHandler}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
