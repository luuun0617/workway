import { NavLink } from "react-router-dom";
function InterestedBtn() {
    return(<>
    <NavLink 
      to="/Contact" 
      className="btn btn-dark btn-arrow d-inline-flex align-items-center"             
     >
      <span className="me-lg-1 me-0 fs-by-md text-white">我有興趣</span>
      <span className="material-icons-outlined" style={{fontSize: "20px"}}>keyboard_arrow_right</span>
    </NavLink>
    </>)
}

export default InterestedBtn