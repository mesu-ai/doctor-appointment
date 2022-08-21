import { HEADER_HEIGHT } from "../../config/constants";

const Header = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-5">
     <p className="inline-block bg-action rounded-lg text-white px-40 py-4 text-3xl font-bold">Doctor Appointment</p>
      <p className="text-xl mt-2">Appointment Date : <span className="font-semibold">August 21,2022</span></p>

    </div>
  );
};

export default Header;