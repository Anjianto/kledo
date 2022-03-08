import { Helmet } from "react-helmet-async";

const data = [
  {
    title: "Nama",
    subtitle: "Anjianto",
  },
  {
    title: "Alamat",
    subtitle:
      "Dusun Brubuh RT/RW 004/009 Desa Sukoreno Kecamatan Prigen Kabupaten Pasuruan 67157",
  },
  {
    title: "No. HP",
    subtitle: "085645164663",
  },
  {
    title: "Email",
    subtitle: "anjianto06@gmail.com",
  },
  {
    title: "Motto",
    subtitle: "Make it work, make it right, make it fast.",
  },
];

export const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Profile | Kledo</title>
      </Helmet>
      <div className="grid grid-cols-1 xl:grid-cols-12">
        <div className="order-2 col-span-9 mt-10 space-y-10 xl:order-1 xl:mt-0">
          {data.map((item, index) => (
            <div key={index}>
              <h2 className="block text-lg font-semibold text-gray-500 md:text-xl">
                {item.title}
              </h2>
              <p className="text-sm font-bold">{item.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="col-span-3 xl:order-2">
          <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-gray-500">
            <img
              src="/anjianto.jpeg"
              alt="Profile Anjianto"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};
