import React from "react";
import { Card, Container } from "react-bootstrap";
import LoginInput from "../components/LoginInput";
import SAlert from "../components/Alert";

function LoginPage() {
  return (
    <Container md={12} className="my-5">
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && <SAlert type={alert.type} message={alert.message} />}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form Signin</Card.Title>
          <LoginInput />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginPage;
