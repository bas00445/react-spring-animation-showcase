import React from "react";
import Modal from "../../components/Modal";
import { FillParent } from "../../global/globalStyles";

export default function PageModal() {
  return (
    <FillParent>
      <Modal visible width="300px">
        Modal content
      </Modal>
    </FillParent>
  );
}
