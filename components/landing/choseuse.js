const Chooseus = () => {
  return (
    <>
      <div className="flex flex-col container mx-auto justify-center items-center p-5 space-y-5">
        <div className="text-3xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">Mengapa Memilih Kami</div>
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 w-full items-center justify-center">
          <div className="rounded-lg w-96 p-5 h-56 bg-gray-200 mx-auto items-center justify-center flex flex-col space-y-3">
            <div className="bg-blue-500 items-center justify-center p-2 rounded-full">
              <img src="/assets/box.svg" className="w-8 h-8"></img>
            </div>
            <span className="text-lg font-semibold">Lorem ipsum</span>
            <p className="text-gray-500 text-sm text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text</p>
          </div>
          <div className="rounded-lg w-96 p-5 h-56 bg-gray-200 mx-auto items-center justify-center flex flex-col space-y-3">
            <div className="bg-blue-500 items-center justify-center p-2 rounded-full">
              <img src="/assets/box.svg" className="w-8 h-8"></img>
            </div>
            <span className="text-lg font-semibold">Lorem ipsum</span>
            <p className="text-gray-500 text-sm text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text</p>
          </div>
          <div className="rounded-lg w-96 p-5 h-56 bg-gray-200 mx-auto items-center justify-center flex flex-col space-y-3">
            <div className="bg-blue-500 items-center justify-center p-2 rounded-full">
              <img src="/assets/box.svg" className="w-8 h-8"></img>
            </div>
            <span className="text-lg font-semibold">Lorem ipsum</span>
            <p className="text-gray-500 text-sm text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chooseus;
