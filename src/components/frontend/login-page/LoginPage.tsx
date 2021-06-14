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
    <Container maxWidth="50rem" height="50rem">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="50rem" column>
          <Label htmlFor="username">Username</Label>
          <Input register={{ ...register("username") }} />
        </Container>
        <Container maxWidth="50rem" column>
          <Label htmlFor="password">Password</Label>
          <Input register={{ ...register("password") }} />
        </Container>
        <Container
          maxWidth="50rem"
          alignItem="center"
          justifyContent="space-between"
        >
          <Button type="submit">Uloguj se</Button>
          <Link href="/">Registruj se</Link>
        </Container>
      </Form>
    </Container>
  );
};

export default LoginPage;
