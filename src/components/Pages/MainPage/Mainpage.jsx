import React from "react";
import "./style.css";
import Carousel from "./Carousel";
import { useNavigate } from "react-router";

export default function Mainpage() {
  const navigate = useNavigate();
  return (
    <body>
      <div className="mainText">
        <p className="mainText__null">NULL BAKERY</p>
      </div>
      <img
        className="mainBread"
        src="images/HomePageimg/changeMain.png"
        alt=""
      />
      <div className="carousels">
        <Carousel
          img1={"images/HomePageimg/img1.png"}
          img2={"images/HomePageimg/img2.png"}
          img3={"images/HomePageimg/img3.png"}
          img4={"images/HomePageimg/img4.png"}
          img5={"images/HomePageimg/img5.jpeg"}
        />
        <Carousel
          img1={"images/HomePageimg/img6.png"}
          img2={"images/HomePageimg/img7.png"}
          img3={"images/HomePageimg/img8.png"}
          img4={"images/HomePageimg/img9.png"}
          img5={"images/HomePageimg/img10.png"}
        />
      </div>
      <div className="background">
        <img
          className="bakery"
          src="images/HomePageimg/secondimg.png"
          alt="빵집"
        />
      </div>
      <div className="back"></div>
      <img className="wheat" src="images/HomePageimg/wheat.png" alt="밀밭" />
      <div className="wheat__">
        <p className="wheat__p1">우리의 밀로</p>
        <p className="wheat__p2">우리의 것으로</p>
        <p className="wheat__p3">우리의 미래를</p>
        <p className="wheat__p4">만들어 갑니다</p>
      </div>
      {/* <div style={{ position: "relative", height: "50px" }}></div> */}
      <div className="project_wrap">
        <div className="work__projects">
          <div
            className="project"
            target="blank"
            onClick={() => {
              navigate("/menu", {
                state: {
                  cate: "coffee",
                },
              });
            }}
          >
            <img
              src="images/HomePageimg/coffee.jpeg"
              alt="커피"
              className="project__img"
            />
            <div className="project__description">
              <h3>View more</h3>
              <span>Coffee</span>
            </div>
          </div>
          <div
            className="project"
            target="blank"
            onClick={() => {
              navigate("/menu", {
                state: {
                  cate: "bread",
                },
              });
            }}
          >
            <img
              src="images/HomePageimg/bread2.png"
              alt="빵"
              className="project__img"
            />
            <div className="project__description">
              <h3>View more</h3>
              <span>Bread</span>
            </div>
          </div>
          <div
            className="project"
            target="blank"
            onClick={() => {
              navigate("/menu", {
                state: {
                  cate: "cookie",
                },
              });
            }}
          >
            <img
              src="images/HomePageimg/coockie.png"
              alt="쿠키"
              className="project__img"
            />
            <div className="project__description">
              <h3>View More</h3>
              <span>coockies</span>
            </div>
          </div>
          <div
            className="project"
            target="blank"
            onClick={() => {
              navigate("/menu", {
                state: {
                  cate: "cake",
                },
              });
            }}
          >
            <img
              src="images/HomePageimg/cake.png"
              alt="케이크"
              className="project__img"
            />
            <div className="project__description">
              <h3>View More</h3>
              <span>Cake</span>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
