import { HOMEPAGE_HEIGHT } from "../../config/constants";
import useDoctors from "../../hooks/useDoctors";

const HomePage = () => {
  const [isPending,doctors]=useDoctors();
  console.log(doctors);
  return (
    <div className="" style={{height:`${HOMEPAGE_HEIGHT}vh`}}>
      <p className="inline-block bg-action rounded-lg text-white px-40 py-4 text-3xl font-bold">Doctor Appointment</p>
      <p className="text-xl mt-2">Appointment Date : <span className="font-semibold">August 21,2022</span></p>

      {isPending && <p>Loading Data...</p>}

      {doctors && doctors.map(doctor=>
      <div key={doctor.id}>
        <img src="" alt="" />
        <p>{doctor?.name}</p>
        </div>
        
        )}
      
      
    </div>
  );
};

export default HomePage;