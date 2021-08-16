import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, category }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            width: "100%",
          }}
        >
          Your Browser doesn't support audio element
        </audio>
      )}

      {word === "" ? (
        <span className="subtitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((meaning) =>
          meaning.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="single-meaning"
                style={{ backgroundColor: "#fff", color: "#000" }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "#000", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((synonym) => `${synonym} ,`)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
