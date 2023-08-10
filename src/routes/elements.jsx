import { Suspense, lazy } from "react";

const Loadable = (Component) => (props) =>
  (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );

export const Main = Loadable(lazy(() => import("../pages/Main")));
export const FlickerMain = Loadable(
  lazy(() => import("../pages/flicker/FlickerMain"))
);
export const ServiceMain = Loadable(
  lazy(() => import("../pages/service/ServiceMain"))
);
export const FreeCheckMain = Loadable(
  lazy(() => import("../pages/freeCheckup/FreeCheckMain"))
);
export const CSMain = Loadable(lazy(() => import("../pages/cs/CSMain")));
