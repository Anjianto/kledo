import { Outlet, useLocation } from "react-router-dom";

import { Navbar } from "src/components/Navbar";

export const Public = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <main className="mx-auto my-28 px-4 sm:w-2/3 md:my-44 md:px-0 lg:w-1/2 2xl:w-1/3">
        <h1 className="text-center text-3xl font-bold lg:text-5xl">
          {location.pathname === "/login" ? "Login" : "Profile"}
        </h1>
        <div className="mt-9 rounded-xl border border-gray-200 bg-gray-100 p-8 md:rounded-3xl md:p-16">
          <Outlet />
        </div>
      </main>
    </>
  );
};
