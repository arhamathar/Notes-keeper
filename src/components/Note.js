import React, { useState } from "react";
import { CirclePicker } from 'react-color';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import PaletteIcon from '@material-ui/icons/Palette';

const DEFAULT_COLORS = [
    "#f44336", "#e91e63", "#9c27b0", "#03a9f4", "#00bcd4", "#8ED1FC", "#F78DA7",
    "#009688", "#7BDCB5", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ABB8C3"
];

function Note(props) {
    const [edit, setEdit] = useState(false);
    const [background, setBackground] = useState('#fff');
    const [showColor, setShowColor] = useState(false);
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

    const showColorHandler = () => {
        setShowColor(true);
    }

    const handleChangeComplete = (color) => {
        setBackground(color.hex);
        setShowColor(false);
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
            <React.Fragment>
                <div className="note" style={{ backgroundColor: background }}>
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                    <button onClick={onDeleteHandler}>
                        <DeleteIcon />
                    </button>
                    <button onClick={onEditHandler}>
                        <EditIcon />
                    </button>
                    <button onClick={showColorHandler}>
                        <PaletteIcon />
                    </button>
                    {showColor && <CirclePicker
                        circleSize={24}
                        circleSpacing={12}
                        colors={DEFAULT_COLORS}
                        color={background}
                        onChangeComplete={handleChangeComplete}
                    />}
                </div>
            </React.Fragment>
        );
    }
}

export default Note;
