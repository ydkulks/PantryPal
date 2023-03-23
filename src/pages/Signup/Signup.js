import React, {useState} from 'react';

function Signup() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [re_pass, setRePass] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();
    const formReset = document.getElementById('SignupForm');
    formReset.reset();
    let Msg = document.getElementById('SignupMsg');
    if (pass === re_pass) {
      if (pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
        const formData = {
          name: name,
          email: email,
          password: pass,
        };
        try {
          // Sending form data to server
          const response = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const result = await response.json();
          console.log(result);
          if (result.status === 201) {
            formReset.reset();
            Msg.innerText = 'You have successfully signed up';
          } else if(result.status === 409){
            formReset.reset();
            Msg.innerText = 'User already exists!';
          } else{
            formReset.reset();
            Msg.innerText = 'Something went wrong!';
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        formReset.reset();
        Msg.innerText = 'Characters 6 to 20 with at least one numeric digit,';
        Msg.innerText += 'one uppercase and one lowercase letter';
      }
    } else {
      formReset.reset();
      Msg.innerText = 'Password did not match!';
    }
  };
  return (
    <div className="SignupContainer">
      <div className="row">
        <div className="col-lg-4"></div>
        <div id="SignupCard" className="col-lg-4">
          <h2>Sign up</h2>
          <form id="SignupForm" onSubmit={handleSubmit}>
            {/* Sign-up Form Name */}
            <input
              type="text"
              className="form-control"
              id="SignupInput"
              placeholder="Name"
              onChange={e => setName(e.target.value)}
              pattern=".{4,}"
              required
            />
            <br />
            {/* Sign-up Form Email */}
            <input
              type="email"
              className="form-control"
              id="SignupInput"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              required
            />
            <br />
            {/* Sign-up Form Password */}
            <input
              type="password"
              id="SignupInput"
              className="form-control"
              placeholder="Password"
              onChange={e => setPass(e.target.value)}
              required
            />
            <br />
            {/* Sign-up Form Re-enter Password */}
            <input
              type="password"
              id="SignupInput"
              className="form-control"
              placeholder="Re-enter Password"
              onChange={e => setRePass(e.target.value)}
              required
            />
            <br />
            <input type="submit" id="SignupBtn" value="Submit" />
            <input type="reset" id="SignupBtn" />
          </form>
          <div id="SignupMsg"></div>
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
