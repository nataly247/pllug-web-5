import * as actionTypes from './constants';

export const sendMessage = (user, { content, timestamp }) => ({
  type: actionTypes.NEW_MESSAGE,
  payload: { user, content, timestamp }
});
