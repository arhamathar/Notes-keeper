import React, { useState } from "react";
import { TwitterPicker } from 'react-color';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    const [edit, setEdit] = useState(false);
    const [background, setBackground] = useState('#fff');
    const [editValue, setEditValue] = useState({
        title: props.title,
        content: props.content
    });

    const onDeleteHandler = () => {
        props.onDelete(props.id);
    }

    const onEditHandler = () => {
        setEdit(true);
    }

    const onChangeHandler = (e) => {
        setEditValue(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    }

    const onSaveHandler = () => {
        props.onEdit(editValue, props.id);
        setEdit(false);
    }

    const onCancelHandler = () => {
        setEdit(false);
        setEditValue((prev) => {
            return {
                title: props.title,
                content: props.content
            }
        });
    }

    const handleChangeComplete = (color) => {
        setBackground(color.hex);
    }

    if (edit) {
        return (
            <div className="edit-note note">
                <input
                    type="text"
                    name="title"
                    value={editValue.title}
                    onChange={onChangeHandler}
                />
                <textarea
                    name="content"
                    rows={2}
                    value={editValue.content}
                    onChange={onChangeHandler}
                />
                <button onClick={onCancelHandler}>
                    <CancelIcon />
                </button>
                <button onClick={onSaveHandler}>
                    <SaveIcon />
                </button>
            </div>
        );
    }
    else {
        return (
            <div className="note" style={{ backgroundColor: background }}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={onDeleteHandler}>
                    <DeleteIcon />
                </button>
                <button onClick={onEditHandler}>
                    <EditIcon />
                </button>
                <TwitterPicker
                    color={background}
                    onChangeComplete={handleChangeComplete}
                />
            </div>
        );
    }
}

export default Note;
