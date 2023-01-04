import { useState } from 'react'
import History from "./History"
import Button from "./Button";

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }
    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <>
            {left}
            <Button onClick={handleLeftClick} text='left' />
            <Button onClick={handleRightClick} text='right' />
            {right}
            <History allClicks={allClicks} />
        </>
    )
}

export default App