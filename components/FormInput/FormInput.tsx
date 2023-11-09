"use client";

import { FC, useState } from "react";
import classnames from "classnames";
import { TbEye, TbEyeClosed } from "react-icons/tb";

import { FormInputProps } from "./FormInput.props";

const FormInput: FC<FormInputProps> = ({
  staticData,
  register,
  watch,
  errors,
}) => {
  const { name, label, placeholder, error, options } = staticData;
  const { type, pattern } = options;

  const [inputType, setInputType] = useState<string>(type);

  const hasError = errors[name];

  const inputClass = classnames(
    { "pr-16": type === "password" },
    { "pr-4": type === "text" },
    "focus-blue rounded-md bg-none pl-4 py-2 outline-none outline-1 outline-offset-1 outline-blue-light"
  );

  const toggleInputType = (type: string) => {
    switch (type) {
      case "password":
        setInputType("text");
        break;

      case "text":
        setInputType("password");
        break;

      default:
        break;
    }
  };

  return (
    <label className="relative flex flex-col">
      <span className="mb-1 text-sm">{label}</span>

      <input
        className={inputClass}
        type={inputType}
        placeholder={placeholder ? placeholder : undefined}
        {...register(name, {
          ...options,
          validate: () => {
            if (name !== "userPassword") {
              return undefined;
            }

            const trimmedPassword = watch("userPassword").trim();

            if (trimmedPassword === "" || trimmedPassword.length < 4) {
              return "Ви у форматі";
            }
          },
          pattern: pattern ? new RegExp(pattern) : undefined,
        })}
      />

      {name === "userPassword" ? (
        <button
          type="button"
          onClick={() => toggleInputType(inputType)}
          className="absolute right-4 top-1/2 flex translate-y-[2px] items-center justify-center text-[10px]"
        >
          {inputType === "text" ? (
            <TbEye
              size={20}
              className="text-black-light"
              aria-label="Open eye icon. Click to hide the password"
            />
          ) : (
            <TbEyeClosed
              size={20}
              className="text-black-light"
              aria-label="Closed eye icon. Click to show the password"
            />
          )}
        </button>
      ) : null}

      {hasError ? (
        <span className="absolute top-full mt-1 text-[10px] text-notify-error">
          {error}
        </span>
      ) : null}
    </label>
  );
};

export default FormInput;
