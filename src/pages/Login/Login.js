import React, {useState} from 'react';

const Login = () => {
  const [name, setName] = useState(null);
  const [pass, setPass] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();
    const formReset = document.getElementById('LoginForm');
    formReset.reset();
    let Msg = document.getElementById('LoginMsg');
    const formData = {
      name: name,
      password: pass,
    };
    try {
      // Sending form data to server
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      if (result.status === 200) {
        formReset.reset();
        Msg.innerText = 'You have successfully Logged-in';
      } else {
        formReset.reset();
        Msg.innerText = 'Incorrect login credentials!';
      }
    } catch (err) {
      console.log(err);
      Msg.innerText = 'Cannot connect to server! Try again later';
    }
  };
  return (
    <div className="LoginContainer">
      <div className="row">
        <div className="col-lg-4"></div>
        <div id="LoginCard" className="col-lg-4">
          <h2>Login</h2>
          <form id="LoginForm" onSubmit={handleSubmit}>
            {/* Login Form Name */}
            <input
              type="text"
              className="form-control"
              id="LoginInput"
              placeholder="Name"
              onChange={e => setName(e.target.value)}
              pattern=".{4,}"
              required
            />
            <br />
            {/* Login Form Password */}
            <input
              type="password"
              id="LoginInput"
              className="form-control"
              placeholder="Password"
              onChange={e => setPass(e.target.value)}
              required
            />
            <br />
            <input type="submit" id="LoginBtn" value="Login" />
          </form>
          <div id="LoginMsg"></div>
          <a href="/signup"> Forgot password?</a>
          <p>
            New to PantryPal?
            <a href="/signup"> Sign-up</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
