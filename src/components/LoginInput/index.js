import React from "react";
import { Form } from "react-bootstrap";
import TextInputWithLabel from "../TextInputWithLabel";
import SButton from "../Button";

export default function LoginInput({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={"Masukan email"}
        label={"Email"}
        name="email"
        value={""}
        type="email"
        onChange={handleChange}
      />

      <TextInputWithLabel
        placeholder={"Masukan password"}
        label={"Password"}
        name="password"
        value={""}
        type="password"
        onChange={handleChange}
      />

      <SButton
        loading={isLoading}
        disabled={isLoading}
        variant="primary"
        className="bg-danger"
        action={handleSubmit}
      >
        Submit
      </SButton>
    </Form>
  );
}
