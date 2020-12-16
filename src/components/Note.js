import React from "react";

function Note(props) {
    const onClickHandler = () => {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={onClickHandler}>DELETE</button>
        </div>
    );
}

export default Note;
