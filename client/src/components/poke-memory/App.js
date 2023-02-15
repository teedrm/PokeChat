import { useEffect, useState } from "react";
import "./App.css";
import "./styledButtons.css";
import SingleCard from "./component/SingleCard";
import PlaySound from "./bgm";
import logo from "./img/logo.png"



const cardImages = [
  { src: "/img/eve-2.png", matched: false },
  { src: "/img/bulbasaur-2.png", matched: false },
  { src: "/img/squirtle-2.png", matched: false },
  { src: "/img/ganger-2.png", matched: false },
  { src: "/img/pikachu-2.png", matched: false },
  { src: "/img/piplup-2.png", matched: false },
];

export default function Game() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleCards);
    setTurns(0);
  };

  //handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) => {
          return prev.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  //reset choiced & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <body>
      <img src={logo} />
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
        <div>
        <button className="new-game pushable" onClick={shuffleCards} disabled={disabled}>
  <span class="front-1">Start new game</span>
</button>
          <div className="turn">Turns: {turns}</div>
            <PlaySound />
      </div>
      </div>
    </body>
  );
}
