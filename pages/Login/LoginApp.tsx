import { useState } from "react";
import { Button } from "react-bootstrap";
import Login from "./Login";

export default function LoginApp() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="light" onClick={() => setModalShow(true)}>
        Login
      </Button>

      <Login show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
