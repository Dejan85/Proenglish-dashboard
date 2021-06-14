import React from "react";
import { Container, Input, Form } from "src/components/ui";
import { useForm } from "react-hook-form";
import { FormValue } from "./types";

const LoginPage: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit = (data) => {
    console.log("test", data);
  };

  return (
    <Container maxWidth="50rem" height="50rem">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("username")} />
      </Form>
      LoginPage
    </Container>
  );
};

export default LoginPage;
