import { UseFormRegister, FieldErrors, WatchInternal } from "react-hook-form";

import { FormInputs, NameEnum } from "../Form/Form.props";

export type FormInputOptionsType = {
  type: string;
  required: boolean;
  pattern: string;
  minLength: {
    value: number;
    message: string;
  };
  maxLength: {
    value: number;
    message: string;
  };
};

export type StaticInputDataType = {
  name: NameEnum;
  label: string;
  placeholder: string;
  error: string;
  options: FormInputOptionsType;
};

export interface FormInputProps {
  staticData: StaticInputDataType;
  register: UseFormRegister<FormInputs>;
  watch: WatchInternal<FormInputs>;
  errors: FieldErrors<FormInputs>;
}
