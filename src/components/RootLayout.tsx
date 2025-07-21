import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="root-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
}