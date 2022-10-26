import { useDispatch } from "react-redux"
import { appendAnecdote, createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
import { saveAnecdote } from "../services/anecdotes"

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const create = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await saveAnecdote(content)
        dispatch(appendAnecdote(newAnecdote))
        dispatch(setNotification(
          `Created anecdote: ${content}`
        ))
      }

    return (
    <>
    <h2>create new</h2>
    <form onSubmit={create}>
      <div><input name="anecdote"/></div>
      <button type="submit">create</button>
    </form>
    </>)
}

export default AnecdoteForm