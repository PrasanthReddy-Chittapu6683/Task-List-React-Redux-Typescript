import { SET_NOTIFICATION, NotificationAction } from '../Type';

export const setNotification = (msg: string, type: string = 'success'): NotificationAction => {
  return {
    type: SET_NOTIFICATION,
    payload: {
      msg,
      type
    }
  }
}