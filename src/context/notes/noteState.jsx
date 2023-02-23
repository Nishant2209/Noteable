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
    }
  ];

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
