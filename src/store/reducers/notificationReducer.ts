import { NotificationAction, NotificationState, SET_NOTIFICATION } from "../Type"

const initialState: NotificationState = {
    message: '',
    type: 'success'
}


export default (state = initialState, action: NotificationAction): NotificationState => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return {
                ...state,
                message: action.payload.msg,
                type: action.payload.type
            }
        default:
            return state
    }
}