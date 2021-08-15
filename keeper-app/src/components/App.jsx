import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { addSyntheticLeadingComment } from "typescript";

function App() {
  const [notes, setNotes] = React.useState([]);
  // function addNote(newNote) {
  //   setNotes((preNotes) => {
  //     // console.log(newNote);
  //     return [...preNotes, newNote];
  //   });
  // }

  function addNote(newNote) {
    setNotes([...notes, newNote]);
  }

  // function deleteNote(deleteNoteId) {
  //   setNotes(
  //     notes.filter((node, noteId) => {
  //       return noteId !== deleteNoteId;
  //     })
  //   );
  // }
  function deleteNote(deleteNoteId) {
    setNotes((prevNotes) => {
      return prevNotes.filter((node, noteId) => {
        return noteId !== deleteNoteId;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, ind) => {
        return (
          <Note
            key={ind}
            id={ind}
            onClicked={deleteNote}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
