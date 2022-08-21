import useDoctor from "../../hooks/useDoctor";

const HomePage = () => {
  const [isPending,doctors]=useDoctor();
  console.log(doctors);
  return (
    <div>
      {isPending && <p>Loading Data...</p>}

      {doctors && doctors.map(doctor=><p key={doctor.id}>{doctor?.name}</p>)}
      
      
    </div>
  );
};

export default HomePage;