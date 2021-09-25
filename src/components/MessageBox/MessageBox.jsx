import { ListGroup } from "react-bootstrap";
import Message from "./../Message";
import MessageInput from "./../MessageInput";
import "./MessageBox.scss";
function MessageBox(props) {
  return (
    <div className="message-box">
      <Message
        from="client"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <Message
        from="bot"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <Message
        from="client"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <Message
        from="bot"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <MessageInput />
    </div>
  );
}
export default MessageBox;
