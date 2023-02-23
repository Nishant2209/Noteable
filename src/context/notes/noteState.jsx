import NoteContext from "./noteContext";

const NoteState = (props) => {
  const state = {
    name: "Nishant ",
    class: " BTech IT",
  };
  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};
export default NoteState;
