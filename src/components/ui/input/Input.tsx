import styled from "styled-components";

const InputWrapper = styled.input`
  padding: 1rem;
`;

const Input = ({ register }): JSX.Element => {
  return <InputWrapper {...register} />;
};

export default Input;
