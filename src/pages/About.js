function About() {
  return (
    <div id="About" className="AboutContainer">
      <h2>About</h2>
      <div className="AboutBody">
        <div className="row">
          <div className="col-lg order-lg-2">
            <p>Welcome to Pantry Pal!</p>
            <p>
              The ultimate solution for meal planning and cooking inspiration!
              With our innovative web app, you can easily discover delicious
              recipes based on the ingredients you have in your pantry. Simply
              input the items you have on hand, and we'll provide you with a
              personalized list of recipes tailored to your taste preferences.
              Whether you're a busy parent, a student on a budget, or simply
              looking to switch up your meal routine, Pantry Pal has got you
              covered. Say goodbye to wasted groceries and hello to effortless
              meal planning with Pantry Pal!
            </p>
          </div>
          <div className="col-lg order-lg-1">
            <div className="AboutImg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
