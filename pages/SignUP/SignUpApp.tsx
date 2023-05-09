import { useState } from "react";
import { Button } from "react-bootstrap";
import SignUp from "./SignUp";

export default function SignUpApp() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        variant="dark br-10 rounded-pill"
        onClick={() => setModalShow(true)}
      >
        SignUp
      </Button>

      <SignUp show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
