import { TrashIcon } from "@heroicons/react/outline";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useForm } from "react-hook-form";
import { useParams, useSearchParams } from "react-router-dom";

import {
  useCreateShipping,
  useDeleteShipping,
  useUpdateShipping,
} from "src/services/shippings";
import { Helmet } from "react-helmet-async";

export const ShippingCompsModify = () => {
  const { mutate } = useCreateShipping();
  const { mutate: mutateDelete } = useDeleteShipping();
  const { mutate: mutateUpdate } = useUpdateShipping();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string }>({
    defaultValues: {
      name: searchParams.get("name") || "",
    },
  });

  const onSubmit = (data: { name: string }) => {
    if (id) {
      return mutateUpdate({
        payload: data,
        id,
      });
    }
    mutate(data);
  };

  const deleteShipping = (id: string) => {
    mutateDelete(id);
  };

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <Helmet>
        <title>Shipping Comps {id ? "Edit" : "Create"} | Kledo</title>
      </Helmet>
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <div className="flex items-center">
          <h1 className="text-lg font-bold md:text-2xl">
            {id ? "Edit" : "Tambah"} Shipping Comps
          </h1>
          {id ? (
            <button
              onClick={openModal}
              className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-600/80 text-white hover:bg-red-500"
            >
              <TrashIcon className="h-5 w-5 text-white" />
            </button>
          ) : null}
        </div>
      </div>
      <div className="mt-12">
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 xl:w-1/4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-500"
            >
              Nama
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Nama harus diisi",
              })}
              className={[
                "form-input mt-2 w-full rounded-[10px] bg-white md:mt-4",
                errors.name
                  ? "border-red-500 focus:border-red-400 focus:ring-red-400"
                  : "border-gray-400 focus:border-gray-400 focus:ring-gray-400",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          </div>
          {errors.name && (
            <p className="mt-4 text-sm font-semibold text-red-500">
              {errors.name.message}
            </p>
          )}
          <button
            type="submit"
            className="mt-8 block w-full rounded-lg bg-blue-600/80 px-6 py-2 text-sm font-bold text-white hover:bg-blue-500 md:w-auto"
          >
            Simpan
          </button>
        </form>
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Kamu yakin mau menghapus data ini?
                </Dialog.Title>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Menghapus <strong>{searchParams.get("name")}</strong>
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => deleteShipping(id || "")}
                  >
                    Ya, Hapus!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
