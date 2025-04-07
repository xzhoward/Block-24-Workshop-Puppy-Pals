import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      <h1>Puppy Pals 🐾</h1>

      <div className="puppy-list">
        {puppies.map((puppy) => (
          <p
            key={puppy.id}
            className="puppy-name"
            onClick={() => setFeatPupId(puppy.id)}
          >
            {puppy.name}
          </p>
        ))}
      </div>

      {featPupId && featuredPup && (
        <div className="featured-pup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
