import { useEffect, useState } from "react";

import { DebounceInput } from "react-debounce-input";
import { Helmet } from "react-helmet-async";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { PlusIcon, SearchIcon } from "@heroicons/react/outline";

import { useShippings } from "src/services/shippings";

export const ShippingComps = () => {
  const { data, error, isFetching, refetch } = useShippings();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const isHaveData = data?.data?.data?.length && data?.data?.data?.length > 0;

  useEffect(() => {
    if (searchParams.get("q")) {
      setSearch(decodeURIComponent(searchParams.get("q") || ""));
      refetch();
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // It will make we send our search as soon as possible
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    navigate({
      search: e.target.value
        ? `?q=${encodeURIComponent(e.target.value)}`
        : undefined,
    });
  };

  return (
    <>
      <Helmet>
        <title>Shipping Comps | Kledo</title>
      </Helmet>
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <div className="flex">
          <h1 className="whitespace-nowrap text-2xl font-bold">
            Shipping Comps
          </h1>
          <Link
            to="create"
            className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/80 text-white hover:bg-blue-500"
          >
            <PlusIcon className="h-5 w-5 text-white" />
          </Link>
        </div>
        <div className="relative mt-4 w-56 overflow-hidden rounded-[10px] border border-gray-400 sm:mt-0">
          <SearchIcon className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
          {/* Delay user input for prevent a lot of request and save user bandwidth */}
          <DebounceInput
            type="text"
            placeholder="Cari"
            debounceTimeout={300}
            onChange={onSearch}
            value={search}
            className="form-input w-full border-0 bg-white pl-12 pr-4 text-sm placeholder:text-gray-400 focus:border-0 focus:ring-0"
          />
        </div>
      </div>
      <div className="mt-20">
        <table className="w-full">
          <thead>
            <tr className="block rounded-xl bg-gray-100 px-6 py-4">
              <th className="text-left">Nama</th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <tr>
                <td className="py-20 text-center font-bold text-red-500">
                  Oops.. Something went terrible wrong
                </td>
              </tr>
            ) : isHaveData ? (
              data?.data?.data
                ?.sort((a, b) => a.id - b.id)
                ?.map?.((shipping) => (
                  <tr key={shipping.id}>
                    <td>
                      <Link
                        to={{
                          pathname: `${shipping.id}?name=${shipping.name}`,
                        }}
                        className="block border-b px-6 py-4 text-sm font-bold text-gray-400"
                      >
                        {shipping.name}
                      </Link>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td className="py-20 text-center font-bold text-gray-500">
                  {isFetching
                    ? "Sedang mengambil data anda..."
                    : search
                    ? "Pencarian anda tidak ditemukan. Silahkan gunakan kata lain!"
                    : "Tidak ada data untuk ditampilkan"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
