import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ActuPost(props) {
  const navigate = useNavigate();
  function redirecting(chemin, param) {
    navigate(`${chemin}/${param}`, { state: { param } });
  }
  return (
    <div
      className="containpost"
      onClick={() => redirecting("/recipefind", props)}
    >
      <div className="post-infos">
        <h3>{props.title}</h3>
        <br />
        {/* <FavoriteBorderRoundedIcon className="like" /> */}
        {/* 6 K <br /> */}
        {props.body} <br />
        {props.totalTime} <br />
        {/* <b>id:</b> {props.id} <br />
        <b>userId: </b>
        {props.userId} <br /> */}
      </div>
    </div>
  );
}
