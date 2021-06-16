import React from "react";
import { Container, Input, Form, Label, Button, Link } from "src/components/ui";
import { useForm } from "react-hook-form";
import { FormValue } from "./types";
import { signIn } from "next-auth/client";

const LoginPage: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit = async ({ email, password }) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    console.log("test", result);
  };

  return (
    <Container maxWidth="50rem">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="50rem" column>
          <Label htmlFor="email">Email</Label>
          <Input type="email" register={{ ...register("email") }} />
        </Container>
        <Container maxWidth="50rem" column padding="3rem 0 0 0">
          <Label htmlFor="password">Password</Label>
          <Input type="password" register={{ ...register("password") }} />
        </Container>
        <Container
          maxWidth="50rem"
          alignItem="center"
          justifyContent="space-between"
          padding="3rem 0 0 0"
        >
          <Button type="submit">Uloguj se</Button>
          <Link href="/registracija">Registruj se</Link>
        </Container>
      </Form>
    </Container>
  );
};

export default LoginPage;
