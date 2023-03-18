function Contact() {
  return (
    <div id="Contact" className="ContactContainer">
      <div className="ContactBody">
        <h2 className="ContactTitle">Contact</h2>
        <p className="ContactText">
          Got feedback, a problem, or just want to say hi?
        </p>
        <p className="ContactText">
          We're all ears! Reach out to us using the nifty form below and we'll
          get back to you in a jiffy.
        </p>
        <div id="ContactRow" className="row">
          <div className="col-md-8">
            <form action="" method="post">
              <input
                type="text"
                className="form-control"
                id="TextInput"
                placeholder="Name"
                required
              />
              <br />
              <input
                type="email"
                className="form-control"
                id="TextInput"
                placeholder="Email"
                required
              />
              <br />
              <input
                type="tel"
                className="form-control"
                id="TelInput"
                pattern="[0-9].{9,}"
                placeholder="Phone number"
                required
              />
              <br />
              <textarea
                id="FormTxtArea"
                className="form-control"
                rows="4"
                cols="40"
                placeholder="How can we help you?"
              ></textarea>
              <br />
              <input type="submit" id="FormBtn" value="Submit" />
              <input type="reset" id="FormBtn" />
            </form>
          </div>
          <div className="col-md-4">
            <div className="ContactSocials">
              <a className="IconATag" href="mailto:ydkulks2@gmail.com">
                <i class="bi bi-envelope-fill" id="Icon"></i>
                <span>Email us</span>
              </a>
              <br />
              <i class="bi bi-telephone-fill" id="Icon"></i>
              <span>+91 1234567890</span> <br />
              <a className="IconATag" href="">
                <i class="bi bi-geo-alt-fill" id="Icon"></i>
              </a>
              <span>Location</span> <br />
              <a className="IconATag" href="https://facebook.com">
                <i class="bi bi-facebook" id="Icon"></i>
                <span>Facebook</span>
              </a>
              <br />
              <a className="IconATag" href="https://github.com/ydkulks">
                <i class="bi bi-github" id="Icon"></i>
                <span>Github</span>
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
