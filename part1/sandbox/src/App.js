import { useState } from 'react'
import Display from "./Display";
import Button from "./Button";
const App = () => {
    const [ counter, setCounter ] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)

    return (
        <div>
            <div><Display counter={counter} /></div>
            <Button onClick={increaseByOne} text='plus' />
            <Button onClick={setToZero} text='zero' />
            <Button onClick={decreaseByOne} text='minus' />
        </div>
    )
}

export default App