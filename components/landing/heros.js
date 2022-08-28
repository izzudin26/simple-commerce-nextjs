import Link from "next/link";

const Heros = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row space-y-5 lg:space-y-0 py-5 w-full container mx-auto px-5 items-center justify-between lg:min-h-screen">
      <div className="w-full flex flex-col space-y-5 items-start justify-center mt-5 lg:mt-0">
        <h1 className="text-3xl lg:text-5xl font-semibold">
        <span className="text-blue-600">Blimbing NanoMerce</span>
        </h1>
        <p className="text-gray-400">Merupakan platform yang menghubungkan masyarakat untuk membeli produk UMKM di kelurahan Blimbing</p>
        <div className="flex flex-row space-x-2">
          <Link href="/product">
            <button className="px-5 py-3 lg:py-2 rounded-lg bg-blue-600 text-sm lg:text-lg text-white font-semibold">Jelajahi Produk Kami</button>
          </Link>
          <Link href="/product">
            <button className="px-5 py-3 lg:py-2 rounded-lg bg-gray-white ring-2 ring-gray-400 text-sm lg:text-lg text-gray-400 hover:text-gray-500 hover:ring-gray-500 duration-500 font-semibold">Mengapa Produk Kami?</button>
          </Link>
        </div>
      </div>
      <div className="w-full items-center justify-center">
        <img src="/assets/coffe.jpg" className="w-full rounded-lg h-full"></img>
      </div>
    </div>
  );
};

export default Heros;
