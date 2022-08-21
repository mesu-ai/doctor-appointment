import { HEADER_HEIGHT } from "../../config/constants";

const Header = () => {
  return (
    <div className=" flex flex-col justify-center items-center" style={{height:`${HEADER_HEIGHT}px`}}>
     <p>Online Appointment Portal</p>
    </div>
  );
};

export default Header;