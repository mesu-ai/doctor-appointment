import { HEADER_HEIGHT } from "../../config/constants";

const Header = () => {
  return (
    <div className="bg-action" style={{height:`${HEADER_HEIGHT}px`}}>
      <p>Welcome to Appointment Portal</p>
    </div>
  );
};

export default Header;