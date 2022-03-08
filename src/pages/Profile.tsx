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
    <div className="grid grid-cols-12">
      <div className="col-span-10 space-y-10">
        {data.map((item, index) => (
          <div key={index}>
            <h2 className="block text-lg font-semibold text-gray-500 md:text-2xl">
              {item.title}
            </h2>
            <p className="font-bold">{item.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="col-span-2">
        <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-gray-500">
          <img
            src="/anjianto.jpeg"
            alt="Profile Anjianto"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};
