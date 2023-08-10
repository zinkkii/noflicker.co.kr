import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main";
import {
  Main,
  FlickerMain,
  ServiceMain,
  FreeCheckMain,
  CSMain,
} from "./elements";

export default function Router() {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        { element: <Main />, index: true },
        { path: "flicker", element: <FlickerMain /> },
        { path: "service", element: <ServiceMain /> },
        { path: "freeCheckup", element: <FreeCheckMain /> },
        { path: "cs", element: <CSMain /> },
      ],
    },
  ]);
}
