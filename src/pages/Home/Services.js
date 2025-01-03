import React from 'react';
function Services() {
  return (
    <div id="Services">
      <div className="ServicesBody">
        <h2>Services</h2>
        <p>
          Our website offers a range of services that can help you discover,
          save, and organize your favorite recipes.
        </p>
        <div className="row">
          {/* Search Column */}
          <div className="col-lg order-lg-2">
            <div id="col1" className="ServicesCard">
              <div className="ServicesOverlay">
                <div className="ServicesText">
                  <i id="ServicesIcon" className="bi bi-search"></i>
                  <br />
                  <h3>Search Recipes</h3>
                </div>
              </div>
            </div>
          </div>
          {/* Search Column(Description) */}
          <div id="ServicesPoint1" className="col-lg order-lg-1">
            <p>
              With our powerful search feature, you can easily find recipes that
              match the ingredients you have on hand, making meal planning and
              grocery shopping a breeze.
            </p>
          </div>
        </div>
        <div className="row">
          {/* Save and Organize Column */}
          <div className="col-lg">
            <div id="col2" className="ServicesCard">
              <div className="ServicesOverlay">
                <div className="ServicesText">
                  <i id="ServicesIcon" className="bi bi-pin-angle-fill"></i>
                  <br />
                  <h3>Save and Organize</h3>
                </div>
              </div>
            </div>
          </div>
          {/* Save and Organize Column(Description) */}
          <div id="ServicesPoint2" className="col-lg">
            <p>
              Once you've found a recipe you love, you can save it to your
              personal collection and organize it into categories for easy
              access later.
            </p>
          </div>
        </div>
        <div className="row">
          {/* Shopping list Column */}
          <div className="col-lg order-lg-2">
            <div id="col3" className="ServicesCard">
              <div className="ServicesOverlay">
                <div className="ServicesText">
                  <i id="ServicesIcon" className="bi bi-bag-fill"></i>
                  <br />
                  <h3>Shopping list</h3>
                </div>
              </div>
            </div>
          </div>
          {/* Shopping list Column(Description) */}
          <div id="ServicesPoint3"className="col-lg order-lg-1">
            <p>
              Our shopping list feature also lets you keep track of the
              ingredients you need to buy, so you can always be prepared when
              it's time to cook.
            </p>
            <p>
              Whether you're a seasoned chef or just learning to cook, our
              website is the perfect tool to help you discover and organize your
              favorite recipes. Try it out today and see how easy and fun
              cooking can be!
            </p>
          </div>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}
export default Services;
