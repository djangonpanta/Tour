import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    if (200 - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = (event) => {
    if (noteText.trim().length > 0) {
      event.preventDefault();
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        value={noteText}
        placeholder="Type to add a note .."
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{200 - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
