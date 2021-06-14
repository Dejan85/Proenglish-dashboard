import React from "react";
import { Container, Input, Form, Label } from "src/components/ui";
import { useForm } from "react-hook-form";
import { FormValue } from "./types";

const LoginPage: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  console.log("test", watch());

  const onSubmit = (data) => {
    console.log("test", data);
  };

  return (
    <Container maxWidth="50rem" height="50rem">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="50rem" column>
          <Label htmlFor="username">Username</Label>
          <Input register={{ ...register("username") }} />
        </Container>
      </Form>
    </Container>
  );
};

export default LoginPage;
