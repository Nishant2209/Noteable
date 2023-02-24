import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function NoteItem(props) {
  const context = useContext(noteContext);
  const { note, updateNote, showAlert } = props;
  const { deleteNote } = context;
  return (
    <div className="col-md-3">
      <div className="card my-3" style={{ width: "18rem" }} key={note.id}>
        <div className="card-body d-flex flex-column gap-3">
          <div>
            <h5 className="card-title fs-3 fw-bold">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <p className="card-text text-info fw-medium fs-6 border d-inline py-1 px-3 border-dark border-2 rounded-pill">
              {note.tag}
            </p>
          </div>
          <div className="card-footer bg-white">
            <i
              className="fa-solid fa-trash mx-2 text-danger"
              onClick={() => {
                deleteNote(note._id);
                showAlert("Note Deleted Successfully", "success");
                window.scrollTo(0, 0);
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square mx-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
