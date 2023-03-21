import '../style/Signup/Signup.css';

function Signup() {
  return (
    <div className="SignupContainer">
      <div className="row">
        <div className="col-lg-4"></div>
        <div id="SignupCard" className="col-lg-4">
          <h2>Sign up</h2>
          <form action="" method="post">
            {/* Sign-up Form Name */}
            <input
              type="text"
              className="form-control"
              id="SignupInput"
              placeholder="Name"
              required
            />
            <br />
            {/* Sign-up Form Email */}
            <input
              type="email"
              className="form-control"
              id="SignupInput"
              placeholder="Email"
              required
            />
            <br />
            {/* Sign-up Form Password */}
            <input
              type="password"
              id="SignupInput"
              className="form-control"
    placeholder="Password"
              required
            />
            <br />
            {/* Sign-up Form Re-enter Password */}
            <input
              type="password"
              id="SignupInput"
              className="form-control"
    placeholder="Re-enter Password"
              required
            />
            <br />
            <input type="submit" id="SignupBtn" value="Submit" />
            <input type="reset" id="SignupBtn" />
          </form>
          <p>
            Already on Pantry Pal?
            <a href="/Signup"> Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
