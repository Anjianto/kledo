import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

import { RootState } from "src/store";

export const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <>
      <Helmet>
        <title>Dashboard | Kledo</title>
      </Helmet>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="absolute bottom-40 left-10 right-10 top-40 flex flex-col items-center justify-center rounded-lg bg-gray-200 md:left-32 md:right-32">
        <h2 className="text-xl font-bold text-gray-600/70 md:text-4xl">
          Selamat Datang
        </h2>
        <h3 className="mt-2 text-base font-medium text-gray-400/80 md:text-2xl">
          {user?.name}
        </h3>
      </div>
    </>
  );
};
