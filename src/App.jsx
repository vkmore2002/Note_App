import { useState } from "react";
import "./App.css";
import AddNotes from "./Components/AddNotes";
import AllNotes from "./Components/AllNotes";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <AddNotes setNotes={setNotes} notes={notes} />
      <AllNotes notes={notes} setNotes={setNotes} />
    </>
  );
}

export default App;
