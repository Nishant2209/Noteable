import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63ea66ed4b633fbc96738b4d",
      user: "63e9e47feb12e6cd59ede5f9",
      title: "Anniversary updated",
      description: "13 March 2023",
      tag: "Personal Updated",
      date: "1676306157382",
      __v: 0,
    },
    {
      _id: "63f4337d4f8197244a64bfb4",
      user: "63e9e47feb12e6cd59ede5f9",
      title: "Anniversary",
      description: "12 March 2023",
      tag: "Personal",
      date: "1676948349525",
      __v: 0,
    },
    {
      _id: "63ea66ed4b633f3bc96738b4d",
      user: "63e9e47feb12e6cd59ede5f9",
      title: "Anniversary updated",
      description: "13 March 2023",
      tag: "Personal Updated",
      date: "1676306157382",
      __v: 0,
    },
    {
      _id: "63f4337d4f819724r4a64bfb4",
      user: "63e9e47feb12e6cd59ede5f9",
      title: "Anniversary",
      description: "12 March 2023",
      tag: "Personal",
      date: "1676948349525",
      __v: 0,
    },
    {
      _id: "63ea66ed4b633fbc296738b4d",
      user: "63e9e47feb12e6cd59ede5f9",
      title: "Anniversary updated",
      description: "13 March 2023",
      tag: "Personal Updated",
      date: "1676306157382",
      __v: 0,
    },
    {
      _id: "63f43347d4f8197244a64bfb4",
      user: "63e9e47feb12e6cd59ede5f9",
      title: "Anniversary",
      description: "12 March 2023",
      tag: "Personal",
      date: "1676948349525",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a note
  const addNote = (title, description, tag) => {
    const note = {
      _id: "63f43347d4f81e297244a64bfb4",
      user: "63e9e47feb12e6cd359ede5f9",
      title: title,
      description: description,
      tag: tag,
      date: "1676948349525",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = (id) => {};

  // Edit a note
  const editNote = (id) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
