const Heros = () => {
  return (
    <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 mt-10 w-full container mx-auto px-5 items-center justify-between">
      <div className="w-full flex flex-col space-y-5 items-center justify-center">
        <h1 className="text-3xl lg:text-5xl font-semibold">
          Beautiful Pages to <span className="text-blue-600">Tell Your Story!</span>
        </h1>
        <p className="text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
      </div>
      <div className="w-full items-center justify-center">
        <img src="/assets/coffe.jpg" className="w-full rounded-lg h-full"></img>
      </div>
    </div>
  );
};

export default Heros;
