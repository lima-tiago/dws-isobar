import { ReactNode } from "react";
import { Navbar } from "components/organisms";
import * as Style from "./styles";

type DashboardTemplateProps = {
  children: ReactNode;
};

export const DashboardTemplate = ({ children }: DashboardTemplateProps) => {
  return (
    <Style.Wrapper>
      <Navbar />
      {children}
    </Style.Wrapper>
  );
};
