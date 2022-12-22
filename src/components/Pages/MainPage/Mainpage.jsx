import React from "react";
import "./style.css";

export default function Mainpage() {
  return (
    <body>
      <p className="MainText">
        N<br />U<br />L<br />L<br />B<br />A<br />K<br />E<br />R<br />Y
      </p>
      <img
        className="mainBread"
        src="images/HomePageimg/changeMain.jpg"
        alt=""
      />
      <div class="work__projects">
        <a href="#" class="project" target="blank">
          <img
            src="images/HomePageimg/bread1.png"
            alt="빵"
            class="project__img"
          />
          <div class="project__description">
            <h3>View more</h3>
            <span>Bread</span>
          </div>
        </a>
        <a href="#" class="project" target="blank">
          <img
            src="images/HomePageimg/bread2.png"
            alt="빵"
            class="project__img"
          />
          <div class="project__description">
            <h3>View more</h3>
            <span>Bread</span>
          </div>
        </a>
        <a href="#" class="project" target="blank">
          <img
            src="images/HomePageimg/bread3.png"
            alt="빵"
            class="project__img"
          />
          <div class="project__description">
            <h3>View More</h3>
            <span>Bread</span>
          </div>
        </a>
        <a href="#" class="project" target="blank">
          <img
            src="images/HomePageimg/bread4.png"
            alt="빵"
            class="project__img"
          />
          <div class="project__description">
            <h3>View More</h3>
            <span>Bread</span>
          </div>
        </a>
      </div>
    </body>
  );
}
