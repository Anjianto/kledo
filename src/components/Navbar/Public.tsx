import { Link, useLocation } from "react-router-dom";

export const PublicNavbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 flex w-full items-center justify-between bg-blue-500 px-4 md:px-8">
      <h2 className="whitespace-nowrap text-xl font-bold text-white md:whitespace-normal md:text-2xl">
        KLEDO TEST
      </h2>
      <div className="flex">
        <Link
          to="/user/:id"
          className="h-full px-4 py-4 text-sm font-light text-white md:text-lg"
        >
          Profile
        </Link>
        <Link
          to="/login"
          className={[
            "h-full px-4 py-4 text-sm font-light text-white md:text-lg",
            location.pathname === "/login"
              ? "bg-black transition-colors duration-200 hover:bg-black/80"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};
