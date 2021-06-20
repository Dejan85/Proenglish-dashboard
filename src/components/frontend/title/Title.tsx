import { useState } from "react";
import { SubContainer, Table, Container } from "src/components/ui";
import Modal from "./partials/Modal";

const Title: React.FC<{ titles: object[] }> = ({ titles }): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<string>();

  const modalHandler = (title: string): void => {
    setShowModal((prevModal) => !prevModal);
    if (title) setModalContent(title);
  };

  return (
    <SubContainer>
      {showModal && (
        <Modal modalContent={modalContent} modalHandler={modalHandler} />
      )}
      <Container
        maxWidth="150rem"
        alignItem="center"
        justifyContent="center"
        height="100%"
      >
        <Table onClick={modalHandler} titles={titles} />
      </Container>
    </SubContainer>
  );
};

export default Title;
