import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function header() {
  return (
    <div>
      <Container className="mb-4 ">
        <Row className="justify-content-md-center">
          <Col className="mt-4 titulo">
            <h1 className="mt-4">QUESTS</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
