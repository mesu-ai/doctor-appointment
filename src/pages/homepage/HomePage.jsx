// import { HOMEPAGE_HEIGHT } from "../../config/constants";
import useDoctors from "../../hooks/useDoctors";
import appointmentCover from "../../assets/appointment-cover.png";
import DoctorCard from "../../components/molecules/DoctorCard";

const HomePage = () => {
  const [isPending, doctors] = useDoctors();
  // console.log(doctors);
  return (
    <div
      className="container mx-auto px-10 my-10"
      // style={{ height: `${HOMEPAGE_HEIGHT}vh` }}
    >
      {isPending && <p>Loading Data...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <img className="rounded-lg opacity-60" src={appointmentCover} alt="" />

        </div>
        <div className="my-auto">
        {doctors &&
        doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
          />
        ))}
        </div>
      </div>

      
    </div>
  );
};

export default HomePage;
