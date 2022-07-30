import { useState } from "react";

const Testimonial = () => {
  const [dummy, setDummy] = useState([1, 2, 3]);
  return (
    <>
      <div className="container px-5 mx-auto w-full py-10 items-center justify-center text-center">
        <div className="font-semibold bg-clip-text text-transparent text-3xl bg-gradient-to-r from-green-500 to-blue-500">Testimonial</div>
        <div className="w-full mt-3 grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
          {dummy.map((_) => (
            <div className="w-96 h-48 rounded-lg p-10 shadow ring-1 ring-gray-200 hover:ring-2 duration-500 hover:ring-gray-400 mx-auto flex flex-col">
                <div className="flex flex-row items-center justify-start space-x-3">
                    <img src="/assets/ex_profil.jpg" className="w-14 h-14 rounded-full object-center object-cover"/>
                    <div className="flex flex-col text-left">
                        <span className="font-semibold">Lorem Ipsum</span>
                        <span className="font-medium text-sm text-gray-400">Lorem Ipsum sil dolor amet</span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm text-left mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
