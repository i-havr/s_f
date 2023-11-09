"use client";

import { FormVariantType } from "@/components/Form/Form.props";

export interface IAuthButtonProps {
  variant: FormVariantType;
  children: React.ReactNode;
  actionHandler: (variant: FormVariantType) => void;
  className?: string;
}
