import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const getById = async (id) => {
    const res = await axios.get(`${baseUrl}/${id}`)
    console.log(res.data)
    return res.data
}

const saveAnecdote = async (content) => {
    const res = await axios.post(baseUrl, {
        content: content,
        votes: 0
    })
    return res.data
}

const updateAnecdote = async (content) => {
    const res = await axios.put(`${baseUrl}/${content.id}`, content)
    return res.data
}

export { getAll, saveAnecdote, getById, updateAnecdote }