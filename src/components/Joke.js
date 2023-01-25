function Joke(props){
    return(
        <div>
            <b>{props.setup}</b>
            <p>{props.punchline}</p>
        </div>
    )
}

export default Joke