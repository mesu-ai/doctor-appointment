import React from "react";

const DoctorCard = ({photo,name='',organization=''}) => {
  return (
    <div className=" bg-whitesmoke shadow rounded-md mt-2 grid grid-cols-3 py-2 px-5">
      <div className="col-span-2 flex items-center">
        <img
          className="rounded-full bg-ghostwhite"
          src={photo}
          height="50px"
          width="50px"
          alt="Doctor_Photo"
        />
        <div className="text-start ml-3">
          <p className="text-darkblue text-lg font-semibold">{name}</p>
          <p className="text-darkblue">{organization}</p>
        </div>
      </div>
      <div className="my-auto">
        <button
          className="bg-info text-white px-3 py-2 rounded-lg"
          type="button"
        >
          Fix Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
