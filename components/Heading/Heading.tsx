import { FC, createElement } from "react";

import { HeadingComponentProps, HeadingElementProps } from "./Heading.props";

const Heading: FC<HeadingComponentProps> = ({
  tag = "h2",
  children,
  className = "",
  ...rest
}) => {
  const getHeadingProps = () => {
    const props: HeadingElementProps = { className, ...rest };
    return props;
  };

  return createElement(tag, getHeadingProps(), children);
};

export default Heading;
