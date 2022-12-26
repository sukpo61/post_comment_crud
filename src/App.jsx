import React, { useEffect } from "react";
import Router from "./shared/router";
import { __getComment } from "./redux/modules/comments";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  return <Router />;
};

export default App;

//커뮤니티페이지