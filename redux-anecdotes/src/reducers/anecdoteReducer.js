import { createSlice } from "@reduxjs/toolkit"
import { getAll } from "../services/anecdotes"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const content = asObject(action.payload)
      state.push({
        ...content
      })
    },
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdoteToVote = state.find(a => a.id === id)
      const voted = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1,
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote: voted)
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
    console.log(anecdotes)
    dispatch(setAnecdotes(anecdotes))
  }
}

export const { createAnecdote, voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer