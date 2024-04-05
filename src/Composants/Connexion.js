import React from "react";
import "./Connexion.css";
import { Button } from "@mui/material";

function Connexion(props) {
  console.log(props);
  return (
    <div className={props.class}>
      <Button variant="contained" className="btn">
        Connexion
      </Button>
    </div>
  );
}

export default Connexion;
