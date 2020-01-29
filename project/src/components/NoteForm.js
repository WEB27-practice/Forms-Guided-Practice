import React, { useState } from "react";

const NoteForm = props => {
  // console.log("this is our props",props);
    const [note, setNote] = useState({
        title: '',
        body: ''
    });
    
    // onChange handler to control inputs
    const handleChanges = e => {
        setNote({ ...note, [e.target.name]: e.target.value })
        console.log(note);
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewNote(note);
        setNote({
            title: '',
            body: ''
        })
    }

    // inside React JSX, we need to use htmlFor instead of for (for is a reserved word)
    // can connect the input either by wrapping the input or by using the id on the input that matches the htmlFor
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title">Note Title</label>
            <input 
                id="title" 
                type="text" 
                name="title" 
                value={note.title}
                onChange={handleChanges}
                placeholder="Title"
            />
            <label htmlFor="note">Note</label>
            <input 
                id="note" 
                type="textarea" 
                name="body" 
                value={note.body}
                onChange={handleChanges}
                placeholder="Note"
            />
            <button type="submit">Add Note</button>

        </form>
    );
};

export default NoteForm;
