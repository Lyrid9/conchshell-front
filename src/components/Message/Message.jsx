import { Form } from "react-bootstrap";
import "./Message.scss";
function Message({ text, from }) {
  return (
    <div className="message">
      <div className="message-profile" />
      <div className="message-content">
        <Form.Label className="message-user">{from}</Form.Label>
        <Form.Control className="message-text" placeholder="" value={text} />
      </div>
    </div>
  );
}
export default Message;
