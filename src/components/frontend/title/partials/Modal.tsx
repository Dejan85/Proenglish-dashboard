import styled from "styled-components";
import { Textarea, Button } from "src/components/ui";
import { useForm } from "react-hook-form";

const ModalContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 100rem;
  height: 15rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0 1px 1rem rgb(26 26 36 / 15%);
  font-size: 3rem;
`;

const P = styled.p`
  font-size: 2rem;
`;

const Modal: React.FC<{ modalContent: string; modalHandler: any }> = ({
  modalContent,
  modalHandler,
}): JSX.Element => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const fetchChange = () => {
    modalHandler();
    console.log("test", watch("title"));
  };

  return (
    <ModalContainer>
      <P>Izmeni title:</P>
      <Textarea defaultValue={modalContent} rows={4} {...register("title")} />
      <Button type="submit" onClick={fetchChange}>
        Submit
      </Button>
    </ModalContainer>
  );
};

export default Modal;
