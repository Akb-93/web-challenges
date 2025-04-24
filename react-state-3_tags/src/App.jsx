import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);


//add new tag
  function handleAddTag(newTag) {
    setTags((prevTags) => [...prevTags, newTag]);
  }

// delete tag
function handleDeleteTag(tagToDelete){
  setTags((prevTags)=>prevTags.filter((tag)=> tag !== tagToDelete));
}

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}