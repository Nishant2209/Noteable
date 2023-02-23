import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import { AddNotes } from "./AddNotes";

export default function Notes() {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <>
      <AddNotes />
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem note={note} key={note._id} />;
        })}
      </div>
    </>
  );
}
