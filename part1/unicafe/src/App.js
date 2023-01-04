import { useState } from 'react'
import Header from "./Header";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Header text="give feedback" />
            <Button text="good" onClick={() => {setGood(good + 1)}} />
            <Button text="neutral" onClick={() => {setNeutral(neutral + 1)}} />
            <Button text="bad" onClick={() => {setBad(bad + 1)}} />
            <Statistics good={good} bad={bad} neutral={neutral}
            />
        </div>
    )
}

export default App