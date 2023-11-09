import { FC } from "react";
import classnames from "classnames";

import { IPrimaryButtonProps } from "./PrimaryButton.props";

const PrimaryButton: FC<IPrimaryButtonProps> = ({
  children,
  actionHandler,
  className = "",
}) => {
  const primaryButtonClass = classnames(
    "inline-flex justify-center rounded-md border border-transparent bg-blue-light px-4 py-2 text-sm font-medium text-blue-dark hover:bg-blue-accent focus-blue",
    className
  );

  return (
    <button
      type="button"
      onClick={actionHandler}
      className={primaryButtonClass}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
