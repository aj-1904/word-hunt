import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";

function App() {
  // state for word
  const [word, setWord] = useState("");

  // state for meanings
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "#fff" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header />
      </Container>
    </div>
  );
}

export default App;
