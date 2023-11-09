"use client";

import { FC, useState } from "react";

import { AuthButton, Modal, Form } from "@/components";
import { FormVariantType } from "../Form/Form.props";

const AuthMenu: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formVariant, setFormVariant] = useState<FormVariantType>("register");
  const [titleText, setTitleText] = useState<string>("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (variant: FormVariantType) => {
    setIsModalOpen(true);

    switch (variant) {
      case "register":
        setTitleText("Введіть дані для реєстрації");
        setFormVariant(variant);
        break;

      case "login":
        setTitleText("Введіть дані для входу");
        setFormVariant(variant);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <AuthButton variant="login" actionHandler={openModal}>
        Вхід
      </AuthButton>
      <span className="mx-2">|</span>
      <AuthButton variant="register" actionHandler={openModal}>
        Реєстрація
      </AuthButton>
      <Modal
        title={titleText}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      >
        <Form variant={formVariant} actionHandler={closeModal} />
      </Modal>
    </div>
  );
};

export default AuthMenu;

/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div> */
