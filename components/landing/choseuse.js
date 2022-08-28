const Chooseus = () => {
  return (
    <>
      <div className="flex flex-col container mx-auto justify-center items-center p-5 space-y-8">
        <div className="text-3xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">Mengapa Memilih Kami</div>
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 w-full items-center justify-center">
          <div className="rounded-lg w-96 p-5 h-56 bg-gray-200 mx-auto items-center justify-center flex flex-col space-y-3 hover:ring-2 ring-blue-400 duration-300">
            <div className="bg-blue-500 items-center justify-center p-2 rounded-full">
              <img src="/assets/box.svg" className="w-8 h-8"></img>
            </div>
            <span className="text-lg font-semibold">Produk Berkualitas</span>
            <p className="text-gray-500 text-sm text-center">Produk UMKM Blimbing menyediakan produk yang tidak mengecewakan pelanggan, dan memuaskan calon pembeli</p>
          </div>
          <div className="rounded-lg w-96 p-5 h-56 bg-gray-200 mx-auto items-center justify-center flex flex-col space-y-3 hover:ring-2 ring-blue-400 duration-300">
            <div className="bg-blue-500 items-center justify-center p-2 rounded-full">
              <img src="/assets/box.svg" className="w-8 h-8"></img>
            </div>
            <span className="text-lg font-semibold">Produk Original</span>
            <p className="text-gray-500 text-sm text-center">Produk UMKM Blimbing yang disediakan merupakan produk Original dari Blimbing, yang terjamin kualitasnya</p>
          </div>
          <div className="rounded-lg w-96 p-5 h-56 bg-gray-200 mx-auto items-center justify-center flex flex-col space-y-3 hover:ring-2 ring-blue-400 duration-300">
            <div className="bg-blue-500 items-center justify-center p-2 rounded-full">
              <img src="/assets/box.svg" className="w-8 h-8"></img>
            </div>
            <span className="text-lg font-semibold">Harga Terjangkau</span>
            <p className="text-gray-500 text-sm text-center">Harga tentu saja sangat terjangkau dan cocok untuk semua kalangan dari anak-anak hingga orang dewasa</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chooseus;
