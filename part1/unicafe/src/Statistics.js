import Header from "./Header";
import StatisticLine from "./StatisticLine";

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    let content = <>No feedback given</>
    if (all > 0) {
        content = <>
            <table>
                <tbody>
                    <StatisticLine text="good" count={good} />
                    <StatisticLine text="neutral" count={neutral} />
                    <StatisticLine text="bad" count={bad} />
                    <StatisticLine text="all" count={all} />
                    <StatisticLine text="average" count={(good - bad ) / all } />
                    <StatisticLine text="positive" count={( (100 * good) / all)  + " %"} />
                </tbody>
            </table>
        </>
    }
    return (<>
        <Header text="statistics" />
        {content}
    </>)

}

export default Statistics