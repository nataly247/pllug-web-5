import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import messages from './containers/Messages/reducer';

export default combineReducers({
  messages,
  form
});
