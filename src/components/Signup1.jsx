import React from "react";
import '../css/Login.css';

function Signup1() {
  return (
<div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf827fyFvJ3je5l9M0r-GIpkbL43-064B-56WXGI1eMdpV7HlwjtnJBWvvuAmk7BACXDU&usqp=CAU"
                alt="profile one picture"
              />
          </div>
        </div>
        <div>
            <input type="text" placeholder="User Name " className="name" />
          </div>
          <br></br>

          <div>
            <input
              type="email"
              placeholder="email"
              className="email"
            />
            <br></br>
            <br></br>
          <div>
            <input
              type="password"
              placeholder="password"
              className="password"
            />
          </div>
          <br></br> 
          <div className=" createBut">
          <button >Create Account</button>
          </div>
          <div className="link">
            <a href="login">Sign In</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup1;
