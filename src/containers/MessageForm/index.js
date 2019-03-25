import { reduxForm, reset } from 'redux-form';
import MessageForm from '../../components/Messages/MessageForm';
import { sendMessage } from '../Messages/actions';
import defaultAvatar from '../../img/avatar2.png';

const onSubmit = ({ message }, dispatch) => {
  dispatch(
    sendMessage(
      { name: 'Rostyslav', avatar: defaultAvatar },
      { content: message, timestamp: Date.now() }
    )
  );
  dispatch(
    reset('messageForm')
  );
}
// const onSubmit = (data) => {
//   console.log(data);
//   return ({ type: 'OO', payload: data })
// };

export default reduxForm({
  form: 'messageForm',
  onSubmit
})(MessageForm);
