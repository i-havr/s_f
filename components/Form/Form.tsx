"use client";

import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { isAxiosError, AxiosError } from "axios";
import classnames from "classnames";

import formBuildingData from "@/data/formBuildingData.json";
import { FormInput, SubmitButton } from "@/components";
import { registerUser, loginUser } from "@/services";
import { FORM_REGISTRATION_KEY, FORM_LOGIN_KEY } from "@/constants";
import { IUserRegisterResponse } from "@/types";
import {
  FormProps,
  FormInputs,
  StaticDataType,
  FormVariantType,
} from "./Form.props";

const Form: FC<FormProps> = ({
  variant,
  actionHandler = undefined,
  className = "",
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const getStorageKey = (variant: FormVariantType) => {
    if (variant === "register") {
      return FORM_REGISTRATION_KEY;
    }

    return FORM_LOGIN_KEY;
  };

  useFormPersist(getStorageKey(variant), {
    watch,
    setValue,
    exclude: ["userPassword"],
  });

  const data = formBuildingData[variant] as StaticDataType;

  const onSubmit: SubmitHandler<FormInputs> = async (formData: FormInputs) => {
    setIsLoading(true);

    try {
      if (variant === "register") {
        const user: IUserRegisterResponse = await registerUser(formData);
        console.log(user);
        sessionStorage.removeItem(FORM_REGISTRATION_KEY);
        if (actionHandler) actionHandler();
      }

      if (variant === "login") {
        const user: IUserRegisterResponse = await loginUser(formData);
        console.log(user);
        sessionStorage.removeItem(FORM_LOGIN_KEY);
        if (actionHandler) actionHandler();
      }

      reset();
    } catch (error: AxiosError | unknown) {
      if (isAxiosError(error)) {
        console.log(error.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const formClass = classnames("flex flex-col gap-8", className);

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8"
    >
      <div className={formClass}>
        {data.inputs.map((field) => {
          return (
            <FormInput
              key={field.name}
              staticData={field}
              register={register}
              watch={watch}
              errors={errors}
            />
          );
        })}
      </div>

      <SubmitButton disabled={isLoading}>
        {isLoading ? "Відправляємо..." : data.buttonText}
      </SubmitButton>
    </form>
  );
};

export default Form;
