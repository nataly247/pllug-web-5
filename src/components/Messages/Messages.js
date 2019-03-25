import React from "react";
import { Segment, Comment } from "semantic-ui-react";

import MessagesHeader from "./MessagesHeader";
import MessageForm from "../../containers/MessageForm";
import Message from "./Message";
import { now } from "moment";

class Messages extends React.Component {
  displayMessages = messages =>
    messages.length > 0 &&
    messages.map(message => (
      <Message
        key={message.timestamp}
        message={message}
      />
    ));

  render() {
    const { messages } = this.props;
    // if (messages[0]) messages[0].user.avatar = Goose;
    return (
      <React.Fragment>
        <MessagesHeader />
        <Segment>
          <Comment.Group className="messages">
            {this.displayMessages(messages)}
          </Comment.Group>
        </Segment>

        <MessageForm />
      </React.Fragment>
    );
  }
}

export default Messages;
