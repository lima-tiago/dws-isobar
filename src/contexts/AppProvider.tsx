import { ReactNode } from "react";
import { BandsProvider } from "./BandsProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DetailBand, Home } from "pages";

type AppProviderProps = {
  children: ReactNode;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:bandId",
    element: <DetailBand />,
  },
]);

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <BandsProvider>
      <RouterProvider router={router} />
      {children}
    </BandsProvider>
  );
};
