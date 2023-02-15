import { useEffect, useState } from 'react'
import bluePokeball from './images/blue-pokeball.png'
import greenPokeball from './images/green-pokeball.png'
import orangePokeball from './images/orange-pokeball.png'
import purplePokeball from './images/purple-pokeball.png'
import redPokeball from './images/red-pokeball.png'
import yellowPokeball from './images/yellow-pokeball.png'
import blank from './images/blank.png'
import ScoreBoard from './components/ScoreBoard'
import "./index.css";

const width = 8
const pokeballs = [
  bluePokeball,
  orangePokeball,
  purplePokeball,
  redPokeball,
  yellowPokeball,
  greenPokeball
]

const Game = () => {
  const [currentColourArrangement, setCurrentColourArrangement] = useState([])
  const [squareBeingDragged, setSquareBeingDragged] = useState(null)
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)
  const [scoreDisplay, setScoreDisplay] = useState(0)

  //Column of 4
  const checkForColumnOfFour = () => {
    for (let i = 0; i <= 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
      const decidedColor = currentColourArrangement[i]
      const isBlank = currentColourArrangement[i] === blank

      if (columnOfFour.every(square => currentColourArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 4)
        columnOfFour.forEach(square => currentColourArrangement[square] = blank)
        return true
      }
    }
  }
  //Row of 4
  const checkForRowOfFour = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3]
      const decidedColor = currentColourArrangement[i]
      const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]
      const isBlank = currentColourArrangement[i] === blank

      if (notValid.includes(i)) continue

      if (rowOfFour.every(square => currentColourArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 4)
        rowOfFour.forEach(square => currentColourArrangement[square] = blank)
        return true
      }
    }
  }
  //Column of 3
  const checkForColumnOfThree = () => {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2]
      const decidedColor = currentColourArrangement[i]
      const isBlank = currentColourArrangement[i] === blank

      if (columnOfThree.every(square => currentColourArrangement[square] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 3)
        columnOfThree.forEach(square => currentColourArrangement[square] = blank)
        return true
      }
    }
  }
  // Row of 3
  const checkForRowOfThree = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfThree = [i, i + 1, i + 2]
      const decidedColour = currentColourArrangement[i]
      const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]
      const isBlank = currentColourArrangement[i] === blank

      if (notValid.includes(i)) continue

      if (rowOfThree.every(square => currentColourArrangement[square] === decidedColour && !isBlank)) {
        setScoreDisplay((score) => score + 3)
        rowOfThree.forEach(square => currentColourArrangement[square] = blank)
        return true
      }
    }
  }

  ////Move squares to fill blank if empty
  const moveIntoSquareBelow = () => {
    for (let i = 0; i <= 55; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
      const isFirstRow = firstRow.includes(i)

      //first 3 rows empty - fill with squares
      if (isFirstRow && currentColourArrangement[i] === blank) {
        let randomNumber = Math.floor(Math.random() * pokeballs.length)
        currentColourArrangement[i] = pokeballs[randomNumber]
      }

      if ((currentColourArrangement[i + width]) === blank) {
        currentColourArrangement[i + width] = currentColourArrangement[i]
        currentColourArrangement[i] = blank
      }
    }
  }

  const dragStart = (e) => {
    setSquareBeingDragged(e.target)
  }
  const dragDrop = (e) => {
    setSquareBeingReplaced(e.target)
  }
  const dragEnd = () => {
    const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'))
    const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'))

    currentColourArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src')
    currentColourArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src')

    const validMoves = [
      squareBeingDraggedId - 1,
      squareBeingDraggedId - width,
      squareBeingDraggedId + 1,
      squareBeingDraggedId + width
    ]

    const validMove = validMoves.includes(squareBeingReplacedId)

    const isAColumnOfFour = checkForColumnOfFour()
    const isARowOfFour = checkForRowOfFour()
    const isAColumnOfThree = checkForColumnOfThree()
    const isARowOfThree = checkForRowOfThree()

    if (squareBeingReplacedId &&
      validMove &&
      (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)) {
      setSquareBeingDragged(null)
      setSquareBeingReplaced(null)
    } else {
      currentColourArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src')
      currentColourArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src')
      setCurrentColourArrangement([...currentColourArrangement])
    }
  }


  const createBoard = () => {
    const randomColorArrangement = []
    for (let i = 0; i < width * width; i++) {
      const randomColor = pokeballs[Math.floor(Math.random() * pokeballs.length)]
      randomColorArrangement.push(randomColor)
    }
    setCurrentColourArrangement(randomColorArrangement)
  }

  useEffect(() => {
    createBoard()
  }, [])

  //Set interval - checking for empty string on board every 100s
  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour()
      checkForRowOfFour()
      checkForColumnOfThree()
      checkForRowOfThree()
      moveIntoSquareBelow()
      setCurrentColourArrangement([...currentColourArrangement])
    }, 100)
    return () => clearInterval(timer)
  }, [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColourArrangement])


  return (
    <div className="app">

      <div className="game">
        {currentColourArrangement.map((pokemon, index) => (
          <img
            key={index}
            src={pokemon}
            alt={pokemon}
            data-id={index}
            draggable={true}
            onDragStart={dragStart}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
          />
        ))}
      </div>
      <ScoreBoard score={scoreDisplay} />
    </div>
  )
}

export default Game
