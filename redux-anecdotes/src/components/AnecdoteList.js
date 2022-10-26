import { useSelector, useDispatch } from "react-redux"
import { likeAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"


const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    const dispatch = useDispatch()
  
    const vote = ({ id, content }) => {
      dispatch(likeAnecdote(id))
      dispatch(setNotification(
        `You voted ${content}`,
        3
      ))
    }

    return (
        <>
        {[...anecdotes]
            .sort((a, b) => b.votes - a.votes)
            .map(anecdote =>
              anecdote.content.toLowerCase().includes(filter.toLowerCase()) 
              ?
              <div key={anecdote.id}>
                <div>
                  {anecdote.content}
                </div>
                <div>
                  has {anecdote.votes}
                  <button onClick={() => vote(anecdote)}>vote</button>
                </div>
              </div>
              : null
            )}
        </>
    )
}

export default AnecdoteList