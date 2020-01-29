import React, { useState } from "react";

const NoteForm = props => {
  // console.log("this is our props",props);
    const [note, setNote] = useState({
        title: ''
    });
    
    // onChange handler to control inputs
    const handleChanges = e => {
        setNote({title: e.target.value})
        console.log(note);
    }

    // inside React JSX, we need to use htmlFor instead of for (for is a reserved word)
    // can connect the input either by wrapping the input or by using the id on the input that matches the htmlFor
    return (
        <form>
            <label htmlFor="title">Note Title</label>
            <input id="title" type="text" onChange={handleChanges}/>
        </form>
    );
};

export default NoteForm;
