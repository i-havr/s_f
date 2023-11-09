import { FC } from "react";
import classnames from "classnames";

import { ISubmitButtonProps } from "./SubmitButton.props";

const SubmitButton: FC<ISubmitButtonProps> = ({
  children,
  disabled = false,
  className = "",
}) => {
  const primaryButtonClass = classnames(
    "inline-flex justify-center rounded-md border border-transparent bg-blue-light px-4 py-2 text-sm font-medium text-blue-dark hover:bg-blue-accent focus-blue",
    className
  );

  return (
    <button type="submit" disabled={disabled} className={primaryButtonClass}>
      {children}
    </button>
  );
};

export default SubmitButton;
