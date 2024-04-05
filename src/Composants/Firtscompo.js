import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import ActuPost from "./ActuPost";

export default function Firtscompo() {
  const [loca, setLocal] = useState([]);
  const [data, setData] = useState([]);
  const [boton, setBoton] = useState(false);

  async function AllPost() {
    try {
      const divError = document.querySelector(".error-messg");
      console.log("bloc actuel", boton);

      const url = "https://jsonplaceholder.typicode.com/posts";
      const r = await fetch(url, {
        method: "GET",
      });
      // si l'appel fonctionne bien et le message d'erreur est affiche
      if (r.ok === true && boton == false) {
        divError.style.display = "none";
        // Utilisez await pour attendre la résolution de la promesse
        const data = await r.json();
        console.log("IIIIIIIIIIIIICCCIIIIIII", data);
        setLocal(data);

        //DEBUT UTILISATION DU LOCALSTORAGE
        const firstFiveItems = data.slice(0, 5);
        localStorage.setItem("data", JSON.stringify(firstFiveItems));
        setData(firstFiveItems);
        // affichage du localstorage
        console.log("le localstore", firstFiveItems);
        // FIN UTILISATION LOCALSTRAGE
      } else if (boton == true && !(r.ok === true)) {
        divError.style.display = "block";
      } else if (r.ok === true && boton == true) {
        divError.style.display = "none";
        setBoton(false);
      } else {
        Errormesage();
        setBoton(true);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  }
  // fonction d'affichage du message
  const Errormesage = () => {
    return (
      <div className="error-messg">
        <h2>
          <b>Aucun post n'a encore été récupéré</b>{" "}
        </h2>
        <Button variant="contained" className="btn" onClick={AllPost}>
          Refresh
        </Button>
      </div>
    );
  };
  // fonction d'affichage des posts
  const EssaiPost = () => {
    return (
      <div className="actu-post">
        {loca?.map((post, index) => (
          <div key={index}>
            <ActuPost
              userId={post.userId}
              title={post.title}
              body={post.body}
              id={post.id}
            ></ActuPost>
          </div>
        ))}
      </div>
    );
  };
  // appel de l'api a chq fois que la pageest chargee
  useEffect(() => {
    AllPost();
  }, []);

  return (
    <div>
      <div>{Errormesage()}</div>
      <EssaiPost />
    </div>
  );
}
