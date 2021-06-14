import React from "react";
import { Container, Input, Form, Label, Button, Link } from "src/components/ui";
import { useForm } from "react-hook-form";
import { FormValue } from "./types";

const LoginPage: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  // console.log("test", watch());

  const onSubmit = (data) => {
    console.log("test", data);
  };

  return (
    <Container maxWidth="50rem">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="50rem" column>
          <Label htmlFor="username" padding="0 0 1rem 0">
            Username
          </Label>
          <Input register={{ ...register("username") }} />
        </Container>
        <Container maxWidth="50rem" column padding="3rem 0 0 0">
          <Label htmlFor="password" padding="0 0 1rem 0">
            Password
          </Label>
          <Input register={{ ...register("password") }} />
        </Container>
        <Container
          maxWidth="50rem"
          alignItem="center"
          justifyContent="space-between"
          padding="3rem 0 0 0"
        >
          <Button type="submit">Uloguj se</Button>
          <Link href="/">Registruj se</Link>
        </Container>
      </Form>
    </Container>
  );
};

export default LoginPage;
