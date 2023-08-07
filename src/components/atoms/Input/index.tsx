import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import * as Style from "./styles";

export const Input = ({
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return <Style.Input {...props} />;
};
