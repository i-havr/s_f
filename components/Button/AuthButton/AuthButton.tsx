import { FC } from "react";

import { IAuthButtonProps } from "./AuthButton.props";

const AuthButton: FC<IAuthButtonProps> = ({
  variant,
  children,
  actionHandler,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={() => actionHandler(variant)}
      className={className}
    >
      {children}
    </button>
  );
};

export default AuthButton;
