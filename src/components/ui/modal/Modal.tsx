import { Modal, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";

interface IProps {
  children: ReactNode;
  isModalOpen: boolean;
  handleClose: () => void;
  handleOpen?: () => void;
}

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 100%;
  max-width: 600px;
  height: auto;
  padding: 20px;
`;

const ModalClose = styled.button`
  cursor: pointer;
  position: absolute;
  right: -25px;
  top: -25px;
  background: none;
  border: none;
`;

export const MyModal: FC<IProps> = ({
  children,
  isModalOpen,
  handleClose,
  handleOpen,
}) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <ModalContent>
        {children}
        <ModalClose onClick={handleClose}>x</ModalClose>
      </ModalContent>
    </Modal>
  );
};
