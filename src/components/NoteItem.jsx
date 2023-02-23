import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function NoteItem(props) {
  const context = useContext(noteContext);
  const { note, updateNote } = props;
  const { deleteNote } = context;
  return (
    <div className="col-md-3">
      <div className="card my-3" style={{ width: "18rem" }} key={note.id}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text text-info">{note.tag}</p>
          <i
            className="fa-solid fa-trash mx-2 text-danger"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-2"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
