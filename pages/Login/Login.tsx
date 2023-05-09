import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import medaversity from "../assets/images/medaversitylogo-47.png";
import ImageCourse from "../assets/images/neurological.png";

export default function Login(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <Image
            src={medaversity}
            alt="Picture of the author"
            width={110}
            height={30}
            style={{ borderRadius: "30px" }}
          />
        </Modal.Title>
      </Modal.Header>
      <Image
        src={ImageCourse}
        alt="Picture of the author"
        className="img-fluid"
      />

      <Modal.Body>
        <h3>Enter your mobile number</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Enter your mobile number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              className="text-muted"
              label=" We'll never share your email with anyone else."
            />
          </Form.Group>
          <Button variant="primary" size="lg" type="submit">
            Send OTP
          </Button>

          <Form.Text className="text-muted">
            By clicking on the
            dsjdhsjhdkhhjhjsjdhsdhsjdhsjhdksdjsdjsdgfshdgfhghdfhshgfhsgf
          </Form.Text>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
