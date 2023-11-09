import { StaticInputDataType } from "../FormInput/FormInput.props";

export enum NameEnum {
  userName = "userName",
  userEmail = "userEmail",
  userPassword = "userPassword",
}

export type FormVariantType = "register" | "login";

export type FormInputs = {
  userName?: NameEnum;
  userEmail: NameEnum;
  userPassword: NameEnum;
};

export type StaticDataType = {
  buttonText: string;
  inputs: StaticInputDataType[];
};

export interface FormProps {
  variant: FormVariantType;
  actionHandler?: () => void | undefined;
  className?: string;
}
