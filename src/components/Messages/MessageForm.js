import React from "react";
import { Segment, Button, Input } from "semantic-ui-react";
import { Field, Form } from 'redux-form';
import { required } from '../../utils/validations';
import { normilizeMessage } from '../../utils/normalizations';

class MessageForm extends React.Component {
  state = {
    message: "",
    errors: []
  };

  render() {
    const { message } = this.state;
    const { handleSubmit } = this.props;

    return (
      <Segment className="message__form">
        <form>
          <Field
            name="message"
            component={Input}
            validate={[required]}
            parse={normilizeMessage}
            style={{ marginBottom: "0.7em" }}
            placeholder="Write your message"
            fluid
          />
          {/* <Input
            fluid
            name="message"
            onChange={this.handleChange}
            value={message}
            style={{ marginBottom: "0.7em" }}
            placeholder="Write your message"
          /> */}
          <Button.Group icon widths="2">
            <Button
              // type="submit"
              onClick={handleSubmit}
              color="orange"
              content="Send"
              labelPosition="left"
              icon="edit"
            />
          </Button.Group>
        </form>
      </Segment>
    );
  }
}

export default MessageForm;
