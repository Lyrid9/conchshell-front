import { Button, Col, Container, ListGroupItem, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ReactDOM from "react-dom";
import Message from "../Message/Message";
import "./MessageInput.scss";
function MessageInput() {
  const handleSubmit = (props) => {
    const element = <Message from="client" text={props.value} />;
    ReactDOM.render(element, document.getElementByClass("message-box"));
  };
  return (
    <div className="myContainer">
      <Container fluid>
        <Row>
          <Form>
            <Row md="auto" lg={10}>
              <Form.Control
                className="message-input"
                placeholder="Message"
                defaultValue="Message"
                onSubmit={handleSubmit}
              />
            </Row>
            <Row md="auto" lg={2}>
              <Button className="message-btn" variant="primary" type="submit">
                Send
              </Button>
            </Row>
          </Form>
        </Row>
      </Container>
    </div>
  );
}
export default MessageInput;
