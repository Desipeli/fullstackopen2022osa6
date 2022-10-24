import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  
  const dispatch = useDispatch()

  setTimeout(() => {
    dispatch(setNotification(''))
  }, 5000)
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={ notification.length > 0 ? style : null}>
      { notification }
    </div>
  )
}

export default Notification