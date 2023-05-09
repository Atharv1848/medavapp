import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import medaversity from "../assets/images/medaversitylogo-47.png";
import ImageCourse from "../assets/images/neurological.png";
import { SignupAndLogin } from "../language/English";

export default function SignUp(props: any) {
  return (
    <>
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
          <h3>{SignupAndLogin["signTitle"]}</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder={`${SignupAndLogin["inputMobileNo"]}`}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder={`${SignupAndLogin["inputEmailAddress"]}`} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                className="text-muted"
                label={`${SignupAndLogin["signupCheckboxLabel"]}`}
              />
            </Form.Group>
            <Button variant="primary" size="lg" type="submit">
              {SignupAndLogin["signupButton"]}
            </Button>

            <Form.Text className="text-muted">
              {SignupAndLogin["termsConditons"]}
            </Form.Text>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
