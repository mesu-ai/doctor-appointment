import { HEADER_HEIGHT } from "../../config/constants";
import useDoctors from "../../hooks/useDoctors";

const HomePage = () => {
  const [isPending,doctors]=useDoctors();
  console.log(doctors);
  return (
    <div className="" >
      {isPending && <p>Loading Data...</p>}

      {doctors && doctors.map(doctor=><p key={doctor.id}>{doctor?.name}</p>)}
      
      
    </div>
  );
};

export default HomePage;