import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Aside } from "src/components/Aside";
import { Navbar } from "src/components/Navbar";

import { useIsAuthenticated } from "src/services/auth";

export const AdminLayout = () => {
  const { isAuthenticated } = useIsAuthenticated();
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);

  return isAuthenticated ? (
    <div className="h-full min-h-screen overflow-hidden bg-gray-300">
      <Navbar />
      <div className="flex overflow-hidden">
        <Aside />
        <main
          className={[
            "h-screen min-h-screen w-full overflow-y-auto px-4 py-8 md:p-8",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="mb-20 min-h-screen w-full rounded-3xl bg-white p-8 md:py-4 md:px-10 xl:py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  ) : null;
};
