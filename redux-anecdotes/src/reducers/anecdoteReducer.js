import { createSlice } from "@reduxjs/toolkit"
import { getAll, getById, saveAnecdote, updateAnecdote } from "../services/anecdotes"

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    updateVote(state, action) {
      const voted = action.payload
      return state.map(anecdote =>
        anecdote.id !== voted.id ? anecdote: voted)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async disptach => {
    const newAnecdote = await saveAnecdote(content)
    disptach(appendAnecdote(newAnecdote))
  }
}

export const likeAnecdote = id => {
  return async dispatch => {
    const liked = await getById(id)
    const modified = {...liked, votes: liked.votes + 1}
    const updatedOnServer = await updateAnecdote(modified)
    dispatch(updateVote(updatedOnServer))
  }
}

export const { updateVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer