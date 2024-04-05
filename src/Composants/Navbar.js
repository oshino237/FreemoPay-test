import React from "react";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Connexion from "./Connexion";

export default function Navbar() {
  return (
    <nav className="navbr">
      <div className="links">
        <Link to="/" className="navlink">
          Acceuil{" "}
        </Link>
      </div>
    </nav>
  );
}
