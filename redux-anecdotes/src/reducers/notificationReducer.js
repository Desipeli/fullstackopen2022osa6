import { createSlice } from "@reduxjs/toolkit"

const initialState = 'Oletusnotifikaatio'

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            console.log("setting notification")
            const notification = action.payload
            console.log(notification)
            return notification
        }
    }
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer