// import { HEADER_HEIGHT } from "../../config/constants";
import icon from '../../assets/icon.png';

const Header = () => {
  return (
    <div className="w-full bg-ghostwhite py-4">
      <div className='flex items-center container mx-auto'>
      <img src={icon} alt="" style={{height:'60px'}}/>
      <p className="text-start text-darkblue   text-3xl font-bold">
        Appointment
      </p>

      </div>
      
      {/* <p className="text-xl mt-2">
        Appointment Date : <span className="font-semibold">August 21,2022</span>
      </p> */}
    </div>
  );
};

export default Header;
