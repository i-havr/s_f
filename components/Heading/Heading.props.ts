import { HTMLAttributes } from "react";

type HeadingTag = "h1" | "h2" | "h3";

export interface HeadingElementProps {
  className?: string;
  rest?: HTMLAttributes<HTMLHeadingElement>;
}

export interface HeadingComponentProps extends HeadingElementProps {
  tag?: HeadingTag;
  children: React.ReactNode;
}
