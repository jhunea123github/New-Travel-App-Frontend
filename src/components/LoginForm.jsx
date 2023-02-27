import React from "react";
import '../css/Login.css';

function LoginForm() {
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
        <div className="login">
          
          <h1>Travel-Login </h1>
          
          <div>
            {/* <img src="" alt="" /> */}
            <input type="text" placeholder="User Name " className="name" />
          </div>
          <br></br>

          <div>
            {/* <img src="logo192.png" alt="" /> */}
            <input
              type="password"
              placeholder="password"
              className="password"
            />
          </div>
          <br></br>
          <button>Login</button>

          <div className="link">
            {/* <a href="#">Forgot Password</a> or  */}
            <a href="signup">Sign Up</a>
            <br></br>
            <br></br>
            <div className="withgoogle">
              <a href="signin">Sign-In with Google</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default LoginForm;
