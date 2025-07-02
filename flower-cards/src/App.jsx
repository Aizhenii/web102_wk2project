import './App.css'
import { useState } from 'react';
import Card from "./components/Card";

const flowerCards = [
  {
    img: "/assets/camelia.png",
    answer: "Camelia",
  },
  {
    img: "/assets/dandelion.png",
    answer: "Dandelion"
  },
  {
    img: "/assets/morning-glory.png",
    answer: "Morning Glory"
  },
  {
    img: "/assets/violet.png",
    answer: "Violets"
  }
];

// Stretch goals: add more info to the flowers

const App = () => {
  const [index, updateIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState("")

  const nextCard = () => {
    if (index + 1 < flowerCards.length) {
      updateIndex(index + 1);
      setFlipped(false);
    }
  }
  
  const prevCard = () => {
    if (index - 1 >= 0) {
      updateIndex(index - 1);
      setFlipped(false);
    }
  }

  const submitGuess = () => {
    if (inputValue.trim().toLowerCase == flowerCards[index].answer.toLowerCase) {
      setFeedback("You're right! Good job!!")
    }
    else {
      setFeedback("Aww, that's wrong :(")
    }

    setInputValue("")
  }

  return (
    <div>
      <h2 class="card-title">Flower Cards</h2>
      <h4>These cards are to test you on your flower knowledge or for you learn more about different flowers!</h4>
      <h4>Card Count: {flowerCards.length}</h4>
      <div className="card-container">
        <Card
          img={flowerCards[index].img}
          answer={flowerCards[index].answer}
          flipped={flipped}
          setFlipped={setFlipped}
        />
      </div>

      <div>
        <h4>Guess the answer here:</h4>
        <input
          type="text"
          placeholder="Place your answer here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={submitGuess}>Submit Guess</button>
        <p>{feedback}</p>

      </div>
      
      <button onClick={prevCard} disabled={index === 0}>Previous Card</button>
      <button onClick={nextCard} disabled={index === flowerCards.length - 1}>Next Card</button>

    </div>
  )
}

export default App
