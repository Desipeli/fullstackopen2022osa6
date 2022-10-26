import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        newNotification(state, action) {
            const notification = action.payload
            return notification
        },
        clearNotification(state, action) {
            return ''
        }
    }
})

export const setNotification = (message, timeout) => {
    return async dispatch => {
        dispatch(newNotification(message))
        setTimeout(() => {
            dispatch(clearNotification())
        }, timeout * 1000)
    }
}

export const { newNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer