import { useState } from 'react';
import './App.css';
import FlashCardList from './components/FlashCardList';

function App() {


  const Sample_Cards = [
    {
      id:1,
      question:"What is 2+2?",
      answer: "4",
      options: ["2","3","4","5"]
    },
    {
      id:2,
      question:"What is 2+3?",
      answer: "5",
      options: ["2","3","4","5"]
    },
  ]

  const [cards, setCards] = useState(Sample_Cards);

  return (
    <>
      <FlashCardList flashcards={cards} />
    </>
  );
}

export default App;
