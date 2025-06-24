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

  const nextCard = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * flowerCards.length);
    } while (randomIndex === index && flowerCards.length > 1); // avoid same card if possible
    updateIndex(randomIndex);
  }
  
  const prevCard = () => {
    if (index - 1 >= 0) {
      updateIndex(index - 1);
      setFlipped(false);
    }
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
      
      <button onClick={prevCard}>Previous Card</button>
      <button onClick={nextCard}>Next Card</button>

    </div>
  )
}

export default App
