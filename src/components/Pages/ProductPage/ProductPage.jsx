import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { __getProductpost } from "../../../redux/modules/productposts";
import "./ProductPage.css";

const Postpage = () => {
  const dispatch = useDispatch();
  const { product_posts } = useSelector((state) => {
    return state.product_posts;
  });

  //   const param = useParams();
  const product_post = product_posts.find((t) => t.id === "1");

  useEffect(() => {
    dispatch(__getProductpost());
  }, [dispatch]);
  return (
    <div className="product_middle">
      <div className="product">
        <div className="product_visual">
          {/* 메인 이미지 */}
          <div className="product_visual_img">
            <img src={product_post?.img} />
          </div>
          <div className="product_visual_text">
            {/* 메인 비주얼 왼쪽 텍스트 */}
            <div>
              <h2>
                {product_post?.title}
                <br />
                <span>{product_post?.engtitle}</span>
              </h2>
              <div>
                <h3>Price</h3>
                <p>{product_post?.price}</p>
                <button>Reservation</button>
              </div>
            </div>
            {/* 메인 비주얼 오른쪽 텍스트 */}
            <div>
              <p>{product_post?.titleKrText}</p>
              <p>{product_post?.titleEnText}</p>
            </div>
          </div>
        </div>
        {/* 상세페이지*/}
        <div className="product_contents">
          <div>
            <div className="product_box">
              <span>
                <img src={product_post?.detail1} />
              </span>
              <h2>{product_post?.detailTitle1}</h2>
              <p>{product_post?.detailText1}</p>
            </div>
            <div className="product_box">
              <span>
                <img src={product_post?.detail3} />
              </span>
              <h2>{product_post?.detailTitle3}</h2>
              <p>{product_post?.detailText3}</p>
            </div>
          </div>
          <div>
            <div className="product_box product_right_box">
              <span>
                <img src={product_post?.detail2} />
              </span>
              <h2>{product_post?.detailTitle2}</h2>
              <p>{product_post?.detailText2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Postpage;
