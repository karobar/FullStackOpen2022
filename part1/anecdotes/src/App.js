import { useState } from 'react'
import Button from "./Button";
import Header from "./Header";
import AnecdoteDisplay from "./AnecdoteDisplay";

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]

    const [selectionIndex, setSelectionIndex] = useState(0)
    const [scores, setScores] = useState(Array(anecdotes.length).fill(0))

    const highestScoreIndex = scores.indexOf(Math.max(...scores))

    return (
        <div>
            <Header text="Anecdote of the day" />
            <AnecdoteDisplay anecdote={anecdotes[selectionIndex]} score={scores[selectionIndex]} />
            <Button text="vote" onClick={() => {
                const copy = [...scores]
                copy[selectionIndex] = copy[selectionIndex] + 1
                setScores(copy)
            }} />
            <Button text="next anecdote" onClick={
                () => setSelectionIndex(Math.floor(Math.random() * anecdotes.length))
            } />
            <Header text="Anecdote with the most votes" />
            <AnecdoteDisplay anecdote={anecdotes[highestScoreIndex]} score={scores[highestScoreIndex]} />
        </div>
    )
}

export default App