import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "https://noteable-backend.onrender.com";
  const notesInitial = [];
  const token = localStorage.getItem("token");

  const [notes, setNotes] = useState(notesInitial);

  // Fetch all notes
  const fetchNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    fetchNote();
  };

  // Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    });
    const json = response.json();
    console.log(json);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    fetchNote();
  };

  return (
    <NoteContext.Provider
      value={{ notes, fetchNote, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
