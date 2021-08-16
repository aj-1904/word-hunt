import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";
import Definitions from "./components/Definitions/Definitions";

function App() {
  // state for word
  const [word, setWord] = useState("");

  // state for meanings
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "#fff" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
