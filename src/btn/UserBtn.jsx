import avatar from "../assets/images/avatar.png";
function UserBtn() {
    return(<>
    <button type="button" 
      className="btn btn-light border btn-user fs-by-md" 
      data-bs-toggle="modal" 
      data-bs-target="#loginModal"
     >
      <img src={avatar} alt="user-image" 
        className="header-user-img border rounded-circle me-3"
       />
      Mokumaru
    </button>
    </>)
}

export default UserBtn