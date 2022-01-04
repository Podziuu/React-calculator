const ScoreDisplay = (props) => {
    return (
        <div className="w-full h-20 bg-zinc-800 border text-white font-bold text-2xl text-right whitespace-normal break-words">{props.score}</div>
    )
}

export default ScoreDisplay