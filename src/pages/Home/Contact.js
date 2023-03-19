function Contact() {
  return (
    <div id="Contact" className="ContactContainer">
      <div className="ContactBody">
        {/* Contact Title */}
        <h2 className="ContactTitle">Contact</h2>
        {/* Contact Message */}
        <p className="ContactText">
          Got feedback, a problem, or just want to say hi?
        </p>
        <p className="ContactText">
          We're all ears! Reach out to us using the nifty form below and we'll
          get back to you in a jiffy.
        </p>
        {/* Contact Form */}
        <div id="ContactRow" className="row">
          <div className="col-md-8">
            <form action="" method="post">
              {/* Contact Form Name */}
              <input
                type="text"
                className="form-control"
                id="Name"
                placeholder="Name"
                required
              />
              <br />
              {/* Contact Form Email */}
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="Email"
                required
              />
              <br />
              {/* Contact Form Phone */}
              <input
                type="tel"
                className="form-control"
                id="TelInput"
                pattern="[0-9].{9,}"
                placeholder="Phone number"
              />
              <br />
              {/* Contact Form Text area */}
              <textarea
                id="FormTxtArea"
                className="form-control"
                rows="4"
                cols="40"
                placeholder="How can we help you?"
                required
              ></textarea>
              <br />
              {/* Contact Form Submit & Reset */}
              <input type="submit" id="FormBtn" value="Submit" />
              <input type="reset" id="FormBtn" />
            </form>
          </div>
          {/* Contact Links */}
          <div className="col-md-4">
            <div className="ContactSocials">
              {/* Contact Email */}
              <a className="IconATag" href="mailto:info@example.com">
                <i className="bi bi-envelope-fill" id="Icon"></i>
                <span>Email us</span>
              </a>
              <br />
              {/* Contact phone */}
              <i className="bi bi-telephone-fill" id="Icon"></i>
              <span>+91 1234567890</span> <br />
              {/* Contact Location */}
              <a
                className="IconATag"
                href="https://goo.gl/maps/kQqPAEZsay1rx6RA6"
              >
                <i className="bi bi-geo-alt-fill" id="Icon"></i>
                <span>Location</span>
              </a>
              <br />
              {/* Contact Facebook */}
              <a className="IconATag" href="https://facebook.com">
                <i className="bi bi-facebook" id="Icon"></i>
                <span>Facebook</span>
              </a>
              <br />
              {/* Contact Git-hub */}
              <a className="IconATag" href="https://github.com/ydkulks">
                <i className="bi bi-github" id="Icon"></i>
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
