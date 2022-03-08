import { useRef } from "react";

import { HomeIcon, LogoutIcon, TruckIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { useLogout } from "src/services/auth";
import { RootState } from "src/store";

export const Aside = () => {
  const location = useLocation();
  const isSidebarOpen = useSelector(
    (state: RootState) => state.util.isSidebarOpen
  );
  const { mutate: logout } = useLogout();

  const asideRef = useRef<HTMLElement>(null);

  return (
    <aside
      className={[
        "h-[91.6vh] min-h-[91.6vh] w-full min-w-[240px] max-w-[240px] bg-gray-100 lg:block",
        isSidebarOpen ? "absolute z-10 block" : "hidden",
      ]
        .filter(Boolean)
        .join(" ")}
      ref={asideRef}
    >
      <ul className="flex h-full flex-col">
        <li>
          <Link
            to="/"
            className={[
              "flex w-full items-center border-b border-gray-300 py-3 pl-8 text-lg font-extralight",
              location.pathname === "/" ? "text-blue-500" : "text-gray-500",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <HomeIcon className="mr-2 h-8 w-8 stroke-[1.5]" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/shippings"
            className={[
              "flex w-full items-center border-b border-gray-300 py-3 pl-8 text-lg font-extralight",
              location.pathname.includes("/shippings")
                ? "text-blue-500"
                : "text-gray-500",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <TruckIcon className="mr-2 h-8 w-8 stroke-[1.5]" />
            Shipping Comps
          </Link>
        </li>
        <li className="mt-auto">
          <button
            className="mx-auto mt-16 flex w-full items-center justify-center bg-blue-600/80 py-3 text-lg font-medium text-white hover:bg-blue-500"
            type="button"
            onClick={() => logout()}
          >
            <LogoutIcon className="mr-2 h-8 w-8 stroke-[1.5]" /> Log out
          </button>
        </li>
      </ul>
    </aside>
  );
};
