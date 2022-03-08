import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { RootState } from "src/store";

import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-initials-sprites";
import { MenuIcon } from "@heroicons/react/outline";
import { toggleSidebar } from "src/store/util";

export const Navbar = () => {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const avatar = () => {
    if (!user?.profile_image) {
      return createAvatar(style, {
        seed: user?.name,
        base64: true,
      });
    }
    return user.profile_image;
  };

  return (
    <nav className="sticky top-0 flex w-full items-center justify-between bg-blue-500 px-4 md:px-8">
      <button onClick={() => dispatch(toggleSidebar())} className="lg:hidden">
        <MenuIcon className="h-6 w-6 text-white" />
      </button>
      <Link
        to={{ pathname: !!user ? "/" : "/login" }}
        className="hidden whitespace-nowrap font-bold text-white md:block md:whitespace-normal md:text-2xl lg:block"
      >
        KLEDO TEST {!!user ? "ADMIN" : ""}
      </Link>
      <div className="flex">
        {!!user ? (
          <div className="flex items-center py-4">
            <div className="h-7 w-7 overflow-hidden rounded-full md:h-8 md:w-8">
              <img
                src={avatar()}
                alt={user.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="ml-2 text-sm font-light text-white md:text-lg">
              {user.name}
            </p>
          </div>
        ) : (
          <>
            <Link
              to="/profile"
              className={[
                "h-full px-4 py-4 text-sm font-light text-white md:text-lg",
                location.pathname === "/profile"
                  ? "bg-black transition-colors duration-200 hover:bg-black/80"
                  : "hover:underline",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              Profile
            </Link>
            <Link
              to="/login"
              className={[
                "h-full px-4 py-4 text-sm font-light text-white md:text-lg",
                location.pathname === "/login"
                  ? "bg-black transition-colors duration-200 hover:bg-black/80"
                  : "hover:underline",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
